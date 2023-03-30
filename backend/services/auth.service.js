import User from "../models/user.js";
import * as bcrypt from "bcryptjs";
import Otp, { Constants } from "../models/otp.js";
import UserRoles from "../models/constants.js";
import Exception, { ExceptionCodes } from "../utils/Error.js";
import OtpGeneraor from "../utils/otp-generaor.js";
import * as jwt from "jsonwebtoken";
import * as NotificationService from "./notification.service.js";

const { SALT_ROUNDS } = process.env

export const login = async (email, password, role) => {
    try {
        if (!email) throw new Exception("Email is required", ExceptionCodes.BAD_INPUT);
        if (!password) throw new Exception("Password is required", ExceptionCodes.BAD_INPUT);
        
        const existingUser = await User.findOne({ email });
        if (!existingUser) throw new Exception("User not found", ExceptionCodes.NOT_FOUND);

        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) throw new Exception("Invalid password", ExceptionCodes.UNAUTHORIZED);

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id, role: role }, 'test', { expiresIn: '1h' });

        return { token, user: existingUser };
    } catch (error) {
        console.log(error);
    }
};

export const generateAndSendOtp = async (email) => {
    try {
        const otp = await Otp.findOne({ email });
        if (otp) await NotificationService.sendOtp(email, otp);

        const otpGeneraor = new OtpGeneraor();
        const otpToken = otpGeneraor.generate();

        await Otp.create({ email, emailOtp: otpToken });

        await NotificationService.sendOtp(email, otpToken);
    } catch (error) {
        console.log(error);
    }
};

export const signUp = async (inputUser) => {
    const { firstName, lastName, email,confirmPassword, password, id, role } = inputUser;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) throw new Exception("User already exists", ExceptionCodes.CONFLICT);

        if (password !== confirmPassword) throw new Exception("Passwords do not match", ExceptionCodes.BAD_INPUT);

        const hashedPassword = bcrypt.hash(password, SALT_ROUNDS);

        const result = await User.create({ email, password: hashedPassword, firstName: firstName, lastName: lastName, _id: id, role: role });
        
        const token = jwt.sign({ email: result.email, id: result._id, role: role }, 'test', { expiresIn: '1h' });

        return { token, user: result };
    } catch (error) {
        console.log(error);
    }
};

export const getUser = async (role, email) => {
    try {
        const existingUser = await User.findOne({ email });
        if (!existingUser) throw new Exception("User not found", 404);

        // const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' });

        return { user: existingUser };
    } catch (error) {
        console.log(error);
    }
};

export const forgotPassword = async (email) => {};
