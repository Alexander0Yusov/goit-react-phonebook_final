import { pushToken, pullToken } from 'redux/axiosHerokuInstance';
import axios from 'axios';

export const signUp = async user => {
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/users/signup',
    user
  );
  pushToken(data.token);
  return data;
};

export const login = async user => {
  const { data } = await axios.post(
    'https://connections-api.herokuapp.com/users/login',
    user
  );
  pushToken(data.token);
  return data;
};

export const logout = async () => {
  const { data } = await axios.post('/users/logout');
  pullToken();
  return data;
};

export const getUser = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};
