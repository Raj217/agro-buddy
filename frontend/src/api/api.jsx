import axios from 'axios';
// import * as dotenv from 'dotenv';
// dotenv.config();

// const { API_URL } = process.env;

const API = axios.create({ baseURL: "http://localhost:4000/api/auth" });

export default API;