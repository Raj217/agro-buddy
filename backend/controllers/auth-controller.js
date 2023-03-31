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

export const generateAndSendOtp = async (req, res, next) => {};

export const signUp = async (req, res, next) => {};

export const getUser = async (req, res, next) => {};

export const forgotPassword = async (req, res, next) => {};
