import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

import { API_URL } from process.env;

const API = axios.create({ baseURL: API_URL });

export const signup = (user) => API.post('/signup', user);

export const login = (user) => API.post('/login', user);

export const getUser = (id) => API.get(`/user/${id}`);

export const forgotPassword = (email) => API.post('/forgot-password', email);

export const resetPassword = (email) => API.post('/reset-password', email);

export const generateOtp = (email) => API.post('/generate-otp', email);