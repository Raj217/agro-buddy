import { resetPassword } from "../templates/reset-password.js";
import { otpVerification } from "../templates/otp-verification.js";
import nodemailer from "nodemailer";
import Exception, { ExceptionCodes } from "../utils/Error.js";

export const sendOtp = async (email, otp) => {
  var transport = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    auth: {
      user: process.env.NODEMAILER_AUTH_USER,
      pass: process.env.NODEMAILER_AUTH_PASS,
    },
  });
  transport.sendMail(
    {
      from: `"Agro Buddy" ${process.env.EMAIL}`,
      to: email,
      subject: "OTP Verification",
      html: otpVerification(otp),
    },
    (err, info) => {
      if (err) {
        throw new Exception("Couldn't send message", ExceptionCodes.FORBIDDEN);
      }
      console.log("Info: ", info);
      res.json({
        message: "Email successfully sent.",
      });
    }
  );
};

export const sendResetLink = async (email, url) => {
  var transport = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    auth: {
      user: process.env.NODEMAILER_AUTH_USER,
      pass: process.env.NODEMAILER_AUTH_PASS,
    },
  });
  transport.sendMail(
    {
      from: `"Agro Buddy" ${process.env.EMAIL}`,
      to: email,
      subject: "Reset Password",
      html: resetPassword(url),
    },
    (err, info) => {
      if (err) {
        throw new Exception("Couldn't send message", ExceptionCodes.FORBIDDEN);
      }
      console.log("Info: ", info);
      res.json({
        message: "Email successfully sent.",
      });
    }
  );
};
