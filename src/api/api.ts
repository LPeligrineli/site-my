import axios from 'axios'
console.log('API Base URL:', process.env.NEXT_PUBLIC_WP_BASE_URL);
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WP_BASE_URL,
  timeout: 10000,
    headers: {
    'Content-Type': 'application/json',
  },
})