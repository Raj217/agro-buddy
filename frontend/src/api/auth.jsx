import API from './api'

export const signup = (user) => API.post('/sign-up', user, {
    headers: { "Content-Type": "application/json" }
});

export const login = (user) => API.post('/login', user);

export const getUser = (id) => API.get(`/user/${id}`);

export const forgotPassword = (email) => API.post('/forgot-password', email);

export const resetPassword = (email) => API.post('/reset-password', email);

export const generateOtp = (email) => API.post('/generate-otp', email);