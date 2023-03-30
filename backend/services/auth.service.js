import User from "../models/user.js";
import * as bcrypt from "bcryptjs";
import Otp, { Constants } from "../models/otp.js";
import UserRoles from "../models/constants.js";
import Exception from "../utils/Error.js";
import OtpGeneraor from "../utils/otp-generaor.js";
import * as jwt from "jsonwebtoken";
import * as NotificationService from "./notification.service.js";

export const login = async (email, password, role) => {};

export const generateAndSendOtp = async (email) => {};

export const signUp = async (inputUser) => {};

export const getUser = async (role, email) => {};

export const forgotPassword = async (email) => {};
