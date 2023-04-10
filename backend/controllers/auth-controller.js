import * as AuthService from "../services/auth.service.js";
import { ExceptionCodes } from "../utils/Error.js";

export const login = async (req, res, next) => {
  AuthService.login(req.body.email, req.body.password)
    .then((token) => {
      res
        .status(ExceptionCodes.REQUEST_FULFILLED)
        .json({ message: "Hello again!", ...token });
    })
    .catch((err) => {
      next(err);
    });
};

export const generateAndSendOtp = async (req, res, next) => {
  const email = req.body.email;
  AuthService.generateAndSendOtp(email)
    .then(() => {
      res
        .status(ExceptionCodes.REQUEST_FULFILLED)
        .json({ message: "mail sent successfully" });
    })
    .catch((err) => {
      next(err);
    });
};

export const signUp = async (req, res, next) => {
  AuthService.signUp(req.body)
    .then(() => {
      res.status(ExceptionCodes.CREATED).json({
        message:
          "Welcome aboard, A verification mail has been sent to your mail",
      });
    })
    .catch((err) => {
      next(err);
    });
};

export const getUser = async (req, res, next) => {
  const email = req.loggedInUser.email;
  AuthService.getUser(email)
    .then((user) => {
      res.status(ExceptionCodes.REQUEST_FULFILLED).json(user);
    })
    .catch((err) => {
      next(err);
    });
};

export const forgotPassword = async (req, res, next) => {
  if (req.query.token) {
    let token = req.query.token.substr(1, req.query.token.length - 2);
    let email = req.body.email;
    let password = req.body.password;
    AuthService.forgotPasswordReset(token, email, password)
      .then(() => {
        res
          .status(ExceptionCodes.REQUEST_FULFILLED)
          .json({ message: "Password reset successfully" });
      })
      .catch((err) => {
        next(err);
      });
  } else {
    let email = req.body.email;
    AuthService.forgotPassword(email)
      .then(() => {
        res.status(ExceptionCodes.REQUEST_FULFILLED).json({
          message: "Reset Link has been sent to your mail successfully.",
        });
      })
      .catch((err) => {
        next(err);
      });
  }
};

export const validateOtp = async (req, res, next) => {
  const { email, otp } = req.body;
  AuthService.validateOtp(email, otp)
    .then((token) => {
      res
        .status(ExceptionCodes.REQUEST_FULFILLED)
        .json({ message: "OTP Validated successfully", ...token });
    })
    .catch((err) => {
      next(err);
    });
};

export const changePassword = async (req, res, next) => {
  const email = req.loggedInUser.email;
  const { oldPassword, newPassword } = req.body;
  AuthService.changePassword(email, oldPassword, newPassword)
    .then(() => {
      res
        .status(ExceptionCodes.REQUEST_FULFILLED)
        .json({ message: "Password changed" });
    })
    .catch((err) => {
      next(err);
    });
};
