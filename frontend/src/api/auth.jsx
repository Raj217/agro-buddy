import API from './api'

export const signup = (user) => API.post('/auth/sign-up', user, {
    headers: { "Content-Type": "application/json" }
});

export const login = (user) => API.post('/auth/login', user);

export const getUser = (id) => API.get(`/auth/user/${id}`);

export const forgotPassword = (email) => API.post('/auth/forgot-password', email);

export const resetPassword = (email) => API.post('/auth/reset-password', email);

export const generateOtp = (email) => API.post('/auth/generate-otp', email);