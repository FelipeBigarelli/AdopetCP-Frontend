import axios from 'axios';

const api = axios.create({
  baseURL: 'https://adopetcp.com',
});

export default api;
