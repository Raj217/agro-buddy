import { resetPassword } from "../templates/reset-password.js";
import { otpVerification } from "../templates/otp-verification.js";
import nodemailer from "nodemailer";
import emailjs from "@emailjs/nodejs";
import Exception, { ExceptionCodes } from "../utils/Error.js";


export const sendOtp = async (email, otp) => {
  const templateParams = {
    email: email,
    html: otpVerification(otp),
    subject: "OTP Verification"
  }

  emailjs.init({
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
  })
  emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams, {
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
  }).then((response) => {
    console.log("SUCCESS!!", response.status, response.text);
  }).catch((err) => {
    console.log("ERROR!!", err);
  })
};

export const sendResetLink = async (email, url) => {
  const templateParams = {
    email: email,
    html: resetPassword(url),
    subject: "Forgot Password",
  }

  emailjs.init({
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
  })
  emailjs.send(process.env.SERVICE_ID, process.env.TEMPLATE_ID, templateParams, {
    publicKey: process.env.PUBLIC_KEY,
    privateKey: process.env.PRIVATE_KEY,
  }).then((response) => {
    console.log("SUCCESS!!", response.status, response.text);
  }).catch((err) => {
    console.log("ERROR!!", err);
  })
};
