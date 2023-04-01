import * as AuthService from "../services/auth.service.js";
import { ExceptionCodes } from "../utils/Error.js";

export const login = async (req, res, next) => {
  AuthService.login(req.body.email, req.body.password)
    .then((user) => {
      res.status(ExceptionCodes.REQUEST_FULFILLED).json(user);
    })
    .catch((err) => {
      next(err);
    });
};

export const generateAndSendOtp = async (req, res, next) => {
  const email = req.params.email;
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
    .then((user) => {
      res.status(ExceptionCodes.CREATED).json(user);
    })
    .catch((err) => {
      next(err);
    });
};

export const getUser = async (req, res, next) => {
  const id = req.params.id;
  AuthService.getUser(id)
    .then((user) => {
      res.status(ExceptionCodes.REQUEST_FULFILLED).json(user);
    })
    .catch((err) => {
      next(err);
    });
};

export const forgotPassword = async (req, res, next) => {
  let email = req.params.email;
  AuthService.forgotPassword(email)
    .then(() => {
      res
        .status(ExceptionCodes.REQUEST_FULFILLED)
        .json({ message: "OTP has been sent to your mail successfully." });
    })
    .catch((err) => {
      next(err);
    });
};

export const resetPassword = async (req, res, next) => {
  let email = req.params.email;
  AuthService.resetPassword(email)
    .then(() => {
      res
        .status(ExceptionCodes.REQUEST_FULFILLED)
        .json({ message: "Password reset successfully" });
    })
    .catch((err) => {
      next(err);
    });
};

export const validateOtp = async (req, res, next) => {
  const { email, otp } = req.body;
  AuthService.validateOtp(email, otp)
    .then((user) => {
      res.status(ExceptionCodes.REQUEST_FULFILLED).json(user);
    })
    .catch((err) => {
      next(err);
    });
};
