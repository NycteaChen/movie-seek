import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_TMDB_API_PATH,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_TOKEN}`
  }
});

export default instance;
