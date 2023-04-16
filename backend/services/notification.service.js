import { resetPassword } from "../templates/reset-password.js";
import nodemailer from "nodemailer";

export const sendEmail = async (email, message) => {
  var templateParams = {
    subject: email,
    template: resetPassword,
  };
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "e0678e3f6656b5",
      pass: "f04f29b88076d1",
    },
  });
  transport.sendMail(
    {
      from: '"Test Server" <rajdristant007@gmail.com>',
      to: email,
      subject: "Email Test",
      html: resetPassword,
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

export const sendOtp = async (email, otp, message) => {
  sendEmail(email, `OTP for ${email} : ${otp}, valid for 12 hours `);
  console.log(`OTP for ${email} : ${otp}, valid for 12 hours `);
};

export const sendResetLink = async (email, url) => {
  sendEmail(email, `Reset link for ${email}: ${url}`);
  console.log(`Reset link for ${email}: `, url);
};
