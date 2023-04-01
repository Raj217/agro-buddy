import User from "../models/user.js";
import bcrypt from "bcryptjs";
import Otp from "../models/otp.js";
import UserRoles from "../models/constants.js";
import Exception, { ExceptionCodes } from "../utils/Error.js";
import OtpGeneraor from "../utils/otp-generaor.js";
import jwt from "jsonwebtoken";
import * as NotificationService from "./notification.service.js";
import Validators from "../utils/Validators.js";

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
const PRIVATE_KEY = process.env.PRIVATE_KEY;

export const login = async (email, password, role) => {
  /// Check if required parameters are present
  if (!email)
    throw new Exception("Email is required", ExceptionCodes.BAD_INPUT);
  if (!password)
    throw new Exception("Password is required", ExceptionCodes.BAD_INPUT);

  if (!Validators.isValidEmail(email))
    throw new Exception("Invalid email", ExceptionCodes.UNAUTHORIZED);

  const existingUser = await User.findOne({ email });
  if (!existingUser)
    throw new Exception("User not found", ExceptionCodes.NOT_FOUND);

  const isPasswordValid = await bcrypt.compare(password, existingUser.password);
  if (!isPasswordValid)
    throw new Exception("Invalid password", ExceptionCodes.UNAUTHORIZED);

  /// User can't proceed if email is not verified
  if (!existingUser.isEmailVerified)
    throw new Exception("Email not verified", ExceptionCodes.UNAUTHORIZED);

  const token = jwt.sign(
    { email: existingUser.email, role: role, isEmailVerified: true },
    PRIVATE_KEY,
    {
      expiresIn: "20d",
    }
  );

  return { token, user: existingUser };
};

export const generateAndSendOtp = async (email, mailValidity = true) => {
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
    otpToken = OtpGeneraor.generate(6);
    await Otp.create({ email, emailOtp: otpToken });
  }

  await NotificationService.sendOtp(
    email,
    otpToken,
    mailValidity === true
      ? "Your mail verification OTP is"
      : "Your reset password OTP is"
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

  const result = await User.create({
    email,
    password: hashedPassword,
    firstName: firstName,
    lastName: lastName,
    role: role,
  });
  await generateAndSendOtp(email);

  const token = jwt.sign(
    { email: result.email, role: role, isEmailVerified: false },
    PRIVATE_KEY,
    {
      expiresIn: "20d",
    }
  );

  return { token, user: result };
};

export const getUser = async (id) => {
  const existingUser = await User.findOne({ _id: id });
  if (!existingUser) throw new Exception("User not found", 404);

  return { user: existingUser };
};

/// reset the password
export const resetPassword = async (email, newPass) => {
  /// Email is required
  if (!email) throw new Exception("Email not found", ExceptionCodes.NOT_FOUND);
  if (!Validators.isValidEmail(email))
    throw new Exception("Invalid email", ExceptionCodes.INVALID);

  const existingUser = await User.findOne(email);
  /// If user does not exist, throw an exception
  if (!existingUser)
    throw new Exception("User not found", ExceptionCodes.NOT_FOUND);

  const otpToken = await Otp.findOne({ emailOstp: otp });
  /// If otp not found, user didn't ask before for otp/OTP Expired
  if (!otpToken) {
    throw new Exception(
      "OTP Expired, Please generate a new OTP",
      ExceptionCodes.NOT_FOUND
    );
  }

  /// otp is same for the given email
  if (otpToken.email !== email)
    throw new Exception("Invalid OTP", ExceptionCodes.NOT_FOUND);

  /// OTP verified so we can delete it
  await Otp.findByIdAndDelete({ _id: otpToken._id });

  const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);

  await User.findByIdAndUpdate(
    { _id: existingUser.id },
    { password: hashedPassword }
  );
};

/// Send forgot password otp to email
export const forgotPassword = async (email) => {
  /// Email is required
  if (!email) throw new Exception("Email not found", ExceptionCodes.NOT_FOUND);
  if (!Validators.isValidEmail(email))
    throw new Exception("Invalid email", ExceptionCodes.INVALID);

  await generateAndSendOtp(email, false);
};

export const validateOtp = async (email, otp) => {
  /// Email is required
  if (!email) throw new Exception("Email not found", ExceptionCodes.NOT_FOUND);

  /// Check email validity
  if (!Validators.isValidEmail(email))
    throw new Exception("Invalid email", ExceptionCodes.UNAUTHORIZED);

  const existingUser = await User.findOne({ email });
  /// If user does not exist, then no sense in validating otp
  if (!existingUser)
    throw new Exception("User not found", ExceptionCodes.NOT_FOUND);

  /// If email is already verified, then return
  if (existingUser.isEmailVerified === true)
    throw new Exception("Email is already verified", ExceptionCodes.BAD_INPUT);

  const otpToken = await Otp.findOne({ emailOtp: otp });
  /// If otp not found, user didn't ask before for otp/OTP Expired
  if (!otpToken) {
    await generateAndSendOtp(email);
    throw new Exception("OTP Expired, new Otp sent", ExceptionCodes.NOT_FOUND);
  }

  /// otp is same for the given email
  if (otpToken.email !== email)
    throw new Exception("Invalid OTP", ExceptionCodes.NOT_FOUND);

  /// OTP verified so we can delete it
  await Otp.findByIdAndDelete({ _id: otpToken._id });
  /// Update user state with email is verified
  await User.findByIdAndUpdate({ email }, { isEmailVerified: true });

  return { user: existingUser };
};
