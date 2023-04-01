import * as AuthService from "../services/auth.service.js";

export const login = async (req, res, next) => {
  AuthService.login(req.body.email, req.body.password)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      next(err);
    });
};

export const generateAndSendOtp = async (req, res, next) => {
  const { email } = req.body;
  AuthService.generateAndSendOtp(email)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      next(err);
    });
};

export const signUp = async (req, res, next) => {
  AuthService.signUp(req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      next(err);
    });
};

export const getUser = async (req, res, next) => {
  const { email, role } = req.body;
  AuthService.getUser(role, email)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      next(err);
    });
};

export const forgotPassword = async (req, res, next) => {
  const { email } = req.body;
  AuthService.forgotPassword(email)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      next(err);
    });
};

export const validateOtp = async (req, res, next) => {
  const { email, otp } = req.body;
  AuthService.validateOtp(email, otp)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((err) => {
      next(err);
    });
};