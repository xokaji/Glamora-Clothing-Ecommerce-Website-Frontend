// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5039', // Your backend's base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
