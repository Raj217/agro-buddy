import User from "../models/user.js";
import bcrypt from "bcryptjs";
import Otp, { Constants } from "../models/otp.js";
import UserRoles from "../models/constants.js";
import Exception, { ExceptionCodes } from "../utils/Error.js";
import OtpGeneraor from "../utils/otp-generaor.js";
import jwt from "jsonwebtoken";
import * as NotificationService from "./notification.service.js";
import Validators from "../utils/Validators.js";

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
const PRIVATE_KEY = process.env.PRIVATE_KEY;

export const login = async (email, password, role) => {
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

export const generateAndSendOtp = async (email) => {
  const user = await User.findOne({ email: email });
  if (!user) throw new Exception("User not found", ExceptionCodes.NOT_FOUND);
  if (user && user.isEmailVerified)
    throw new Exception("Email is already verified", ExceptionCodes.FORBIDDEN);

  const otp = await Otp.findOne({ email });
  let otpToken;
  if (otp) otpToken = otp.emailOtp;
  else {
    otpToken = OtpGeneraor.generate(6);
    await Otp.create({ email, emailOtp: otpToken });
  }

  await NotificationService.sendOtp(email, otpToken);
};

// TODO: restrict signup for admin users

// TODO: restrict signup for admin users
export const signUp = async (inputUser) => {
  const { firstName, lastName, email, password, role } = inputUser;
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
  if (existingUser)
    throw new Exception("User already exists", ExceptionCodes.CONFLICT);

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

export const getUser = async (role, email) => {
  const existingUser = await User.findOne({ email });
  if (!existingUser) throw new Exception("User not found", 404);

  return { user: existingUser };
};

export const forgotPassword = async (email) => {
  if (!email) throw new Exception("Email not found", ExceptionCodes.NOT_FOUND);
  if (!Validators.isValidEmail(email))
    throw new Exception("Invalid email", ExceptionCodes.UNAUTHORIZED);

  const existingUser = await User.findOne({ email });
};

export const validateOtp = async (email, otp) => {
    try {
        if (!email) throw new Exception("Email not found", ExceptionCodes.NOT_FOUND);
        if (!Validators.isValidEmail(email)) throw new Exception("Invalid email", ExceptionCodes.UNAUTHORIZED);

        const existingUser = await User.findOne({ email });
        if (!existingUser) throw new Exception("User not found", ExceptionCodes.NOT_FOUND);

        const otpToken = await Otp.findOne({ emailOtp: otp });
        if (!otpToken) throw new Exception("Otp not found", ExceptionCodes.NOT_FOUND);

        if (otpToken.email!== email) throw new Exception("Otp not found", ExceptionCodes.NOT_FOUND);

        await Otp.findByIdAndDelete({ _id: otpToken._id });

        return { user: existingUser };
    } catch (error) {
        console.log(error);
    }
};
