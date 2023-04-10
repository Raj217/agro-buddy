import User from "../models/user.js";
import bcrypt from "bcryptjs";
import Otp from "../models/otp.js";
import Exception, { ExceptionCodes } from "../utils/Error.js";
import ResetPassword from "../models/reset-password.js";
import RandomGenerator from "../utils/random-generator.js";
import jwt from "jsonwebtoken";
import * as NotificationService from "./notification.service.js";
import Validators from "../utils/Validators.js";

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
const TOKEN_KEY = process.env.TOKEN_KEY;
const FRONTEND_URL = process.env.FRONTEND_URL;

export const login = async (email, password) => {
  /// Check if required parameters are present
  if (!email)
    throw new Exception("Email is required", ExceptionCodes.BAD_INPUT);
  if (!password)
    throw new Exception("Password is required", ExceptionCodes.BAD_INPUT);

  if (!Validators.isValidEmail(email))
    throw new Exception("Invalid email", ExceptionCodes.UNAUTHORIZED);

  const existingUser = await User.findOne({ email }).select("+password");
  if (!existingUser)
    throw new Exception("User not found", ExceptionCodes.NOT_FOUND);

  const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordValid)
    throw new Exception("Invalid password", ExceptionCodes.UNAUTHORIZED);

  /// User can't proceed if email is not verified
  if (!existingUser.isEmailVerified)
    throw new Exception("Email not verified", ExceptionCodes.UNAUTHORIZED);

  const token = jwt.sign(
    {
      email: existingUser.email,
      role: existingUser.role,
      isEmailVerified: true,
    },
    TOKEN_KEY,
    {
      expiresIn: "20d",
    }
  );

  return { token };
};

export const generateAndSendOtp = async (email, mailValidity = true) => {
  /// Email is required
  if (!email)
    throw new Exception("Email is required", ExceptionCodes.BAD_INPUT);
  if (!Validators.isValidEmail(email))
    throw new Exception("Invalid email", ExceptionCodes.BAD_INPUT);
  const user = await User.findOne({ email: email });
  if (!user) throw new Exception("User not found", ExceptionCodes.NOT_FOUND);
  if (mailValidity === true) {
    if (user && user.isEmailVerified)
      throw new Exception(
        "Email is already verified",
        ExceptionCodes.FORBIDDEN
      );
  }

  let otpToken;
  const otp = await Otp.findOne({ email });
  if (otp) otpToken = otp.emailOtp;
  else {
    otpToken = RandomGenerator.generate(6);
    await Otp.create({ email, emailOtp: otpToken });
  }

  await NotificationService.sendOtp(
    email,
    otpToken,
    mailValidity === true
      ? "Your mail verification OTP is "
      : "Your reset password OTP is "
  );
};

// TODO: restrict signup for admin users
export const signUp = async (inputUser) => {
  const { firstName, lastName, email, password, role } = inputUser;

  /// Validate if all the required fields are present
  if (!firstName)
    throw new Exception("First name is required", ExceptionCodes.BAD_INPUT);
  if (!lastName)
    throw new Exception("Last name is required", ExceptionCodes.BAD_INPUT);
  if (!role) throw new Exception("Role is required", ExceptionCodes.BAD_INPUT);
  if (!email)
    throw new Exception("Email is required", ExceptionCodes.BAD_INPUT);
  if (!password)
    throw new Exception("Password is required", ExceptionCodes.BAD_INPUT);
  if (password.length < 6)
    throw new Exception(
      "Password must be at least 6 characters",
      ExceptionCodes.BAD_INPUT
    );

  if (!Validators.isValidEmail(email))
    throw new Exception("Invalid email", ExceptionCodes.UNAUTHORIZED);

  const existingUser = await User.findOne({ email });
  /// Already someone exists with the same email
  if (existingUser)
    throw new Exception("User already exists", ExceptionCodes.CONFLICT);

  /// New user thus hash the password
  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  await User.create({
    email,
    password: hashedPassword,
    firstName: firstName,
    lastName: lastName,
    role: role,
  });
  await generateAndSendOtp(email);
};

export const getUser = async (email) => {
  const existingUser = await User.findOne({ email: email });
  if (!existingUser) throw new Exception("User not found", 404);

  return { user: existingUser };
};

/// Send forgot password otp to email
export const forgotPassword = async (email) => {
  /// Email is required
  if (!email) throw new Exception("Email not found", ExceptionCodes.NOT_FOUND);
  if (!Validators.isValidEmail(email))
    throw new Exception("Invalid email", ExceptionCodes.BAD_INPUT);

  const existingUser = await User.findOne({ email });
  if (!existingUser)
    throw new Exception("User not found", ExceptionCodes.NOT_FOUND);

  let resetPassword = await ResetPassword.findOne({ email });
  let url = `${FRONTEND_URL}/forgot-password`;
  let randomCode;
  if (!resetPassword) {
    randomCode = RandomGenerator.generate(50, true);
    ResetPassword.create({
      code: randomCode,
      email: email,
    });
  } else {
    randomCode = resetPassword.code;
  }

  const token = await bcrypt.hash(email + randomCode + TOKEN_KEY, SALT_ROUNDS);
  url += `?token="${token}"`;

  await NotificationService.sendResetLink(email, url);
};

/// reset the password
export const forgotPasswordReset = async (id, email, password) => {
  /// Email is required
  if (!email)
    throw new Exception("Email is required", ExceptionCodes.BAD_INPUT);
  if (!Validators.isValidEmail(email))
    throw new Exception("Invalid email", ExceptionCodes.BAD_INPUT);
  if (!password)
    throw new Exception(
      "New password cannot be empty",
      ExceptionCodes.BAD_INPUT
    );
  if (password.length < 6)
    throw new Exception(
      "Password must be at least 6 characters",
      ExceptionCodes.BAD_INPUT
    );

  const existingUser = await User.findOne({ email }).select("+password");
  /// If user does not exist, throw an exception
  if (!existingUser)
    throw new Exception("User not found", ExceptionCodes.NOT_FOUND);

  const resetPassword = await ResetPassword.findOne({ email });
  /// If resetPassword not found, i.e. it expired
  if (!resetPassword)
    throw new Exception("Password Link Expired.", ExceptionCodes.NOT_FOUND);

  /// Validating the link
  const isLinkValid = await bcrypt.compare(
    email + resetPassword.code + TOKEN_KEY,
    id
  );

  if (!isLinkValid) {
    throw new Exception("Invalid link", ExceptionCodes.UNAUTHORIZED);
  }
  const newHashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  await User.findByIdAndUpdate(
    { _id: existingUser.id },
    { password: newHashedPassword }
  );

  await ResetPassword.findByIdAndDelete({ _id: resetPassword._id });
};

export const validateOtp = async (email, otp) => {
  /// Email is required
  if (!email) throw new Exception("Email not found", ExceptionCodes.BAD_INPUT);
  /// Check email validity
  if (!Validators.isValidEmail(email))
    throw new Exception("Invalid email", ExceptionCodes.BAD_INPUT);
  if (!otp) throw new Exception("OTP is required", ExceptionCodes.BAD_INPUT);

  const existingUser = await User.findOne({ email });
  /// If user does not exist, then no sense in validating otp
  if (!existingUser)
    throw new Exception("User not found", ExceptionCodes.NOT_FOUND);

  /// If email is already verified, then return
  if (existingUser.isEmailVerified === true)
    throw new Exception("Email is already verified", ExceptionCodes.BAD_INPUT);

  const otpToken = await Otp.findOne({ email });
  /// If otp not found, user didn't ask before for otp/OTP Expired
  if (!otpToken) {
    await generateAndSendOtp(email);
    throw new Exception("OTP Expired, new Otp sent", ExceptionCodes.NOT_FOUND);
  }

  /// otp is same for the given email
  if (otpToken.emailOtp !== otp)
    throw new Exception("Invalid OTP", ExceptionCodes.UNAUTHORIZED);

  /// OTP verified so we can delete it
  await Otp.findByIdAndDelete({ _id: otpToken._id });
  /// Update user state with email is verified
  await User.findOneAndUpdate({ email }, { isEmailVerified: true });

  const token = jwt.sign(
    {
      email: existingUser.email,
      role: existingUser.role,
      isEmailVerified: true,
    },
    TOKEN_KEY,
    {
      expiresIn: "20d",
    }
  );

  return { token };
};

// TODO: Implement change password method
export const changePassword = async (email, oldPassword, newPassword) => {
  if (!email) throw new Exception("Email not found", ExceptionCodes.BAD_INPUT);
  if (!Validators.isValidEmail(email))
    throw new Exception("Invalid email", ExceptionCodes.BAD_INPUT);

  if (!oldPassword)
    throw new Exception("Old password is required", ExceptionCodes.BAD_INPUT);
  if (!newPassword)
    throw new Exception("New password is required", ExceptionCodes.BAD_INPUT);
  if (newPassword.length < 6)
    throw new Exception(
      "New password must be at least 6 characters",
      ExceptionCodes.BAD_INPUT
    );
  if (oldPassword === newPassword)
    throw new Exception(
      "Old password cannot be same as new password",
      ExceptionCodes.BAD_INPUT
    );

  const existingUser = await User.findOne({ email }).select("+password");
  if (!existingUser)
    throw new Exception("User not found", ExceptionCodes.NOT_FOUND);

  const isOldPasswordValid = await bcrypt.compare(
    oldPassword,
    existingUser.password
  );
  if (!isOldPasswordValid)
    throw new Exception(
      "Old Password didn't match",
      ExceptionCodes.UNAUTHORIZED
    );

  const newHashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

  await User.findByIdAndUpdate(
    { _id: existingUser.id },
    { password: newHashedPassword }
  );
};
