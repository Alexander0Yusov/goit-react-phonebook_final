import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const pushToken = token => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const pullToken = () => {
  delete axios.defaults.headers.common['Authorization'];
};
