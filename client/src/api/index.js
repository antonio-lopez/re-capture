import axios from 'axios';

const url = process.env.REACT_APP_DEPLOYED_URL;
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
export const fetchEntry = (id) => API.get(`/api/v1/entries/${id}`);
export const createEntry = (newEntry) => API.post('/api/v1/entries', newEntry);
export const deleteEntry = (id) => API.delete(`/api/v1/entries/${id}`);
export const updateEntry = (id, updatedEntry) =>
  API.patch(`/api/v1/entries/${id}`, updatedEntry);
