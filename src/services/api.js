import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-api-url.com',
  // Other configurations
});

export default api;
