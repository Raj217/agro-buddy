import { resetPassword } from "../templates/reset-password.js";
import { otpVerification } from "../templates/otp-verification.js";
import nodemailer from "nodemailer";

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
      from: `"Test Server" ${process.env.EMAIL}`,
      to: email,
      subject: "OTP Verification",
      html: otpVerification(otp),
    },
    (err, info) => {
      if (err) {
        console.log(err);
      }
      console.log("Info: ", info);
      res.json({
        message: "Email successfully sent.",
      });
    }
  );
};

export const sendResetLink = async (email, url) => {
  console.log(url);
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
      from: `"Test Server" ${process.env.EMAIL}`,
      to: email,
      subject: "Reset Password",
      html: resetPassword(url),
    },
    (err, info) => {
      if (err) {
        console.log(err);
      }
      console.log("Info: ", info);
      res.json({
        message: "Email successfully sent.",
      });
    }
  );
};
