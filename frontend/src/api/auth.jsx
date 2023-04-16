import { Axios } from "./axios_config";

export const signup = (user) =>
  Axios.post("/auth/sign-up", user, {
    headers: { "Content-Type": "application/json" },
  });

export const login = (user) => Axios.post("/auth/login", user);

export const getUser = (id) => Axios.get(`/auth/user/${id}`);

export const forgotPassword = (email) =>
  Axios.post("/auth/forgot-password", email);

export const resetPassword = (email) =>
  Axios.post("/auth/reset-password", email);

export const generateOtp = (email) => Axios.post("/auth/generate-otp", email);

export const validateOtp = (email, otp) =>
  Axios.post("/auth/validate-otp", { email: email, otp: otp });
