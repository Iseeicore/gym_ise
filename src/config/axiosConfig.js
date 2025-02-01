import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api', // Lee del archivo .env
  timeout: 5000, // Tiempo máximo para responder
});

export default axiosInstance;
