import axios from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

import { API_URL } from process.env;

const API = axios.create({ baseURL: API_URL });

export default API;