import axios from 'axios';


const API = axios.create({ baseURL: 'http://localhost:4002/api' });

export default API;