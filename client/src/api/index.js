import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

// const url = process.env.REACT_DEVELOPMENT_URL;
const url = 'http://localhost:5000';
const API = axios.create({ baseURL: url });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }

  return req;
});

export const fetchAPI = () => API.get('');
export const signIn = (formData) => API.post('/api/v1/auth/login', formData);
export const signUp = (formData) => API.post('/api/v1/auth/register', formData);
export const fetchEntries = () => API.get('/api/v1/entries');
// export const
// export const
// export const
// export const
