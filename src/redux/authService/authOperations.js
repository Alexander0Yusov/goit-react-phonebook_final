import { axiosInstance, pushToken, pullToken } from 'redux/axiosHerokuInstance';

export const signUp = async user => {
  const { data } = await axiosInstance.post('/users/signup', user);
  pushToken(data.token);
  return data;
};

export const login = async user => {
  const { data } = await axiosInstance.post('/users/login', user);
  pushToken(data.token);
  return data;
};

export const logout = async () => {
  const { data } = await axiosInstance.post('/users/logout');
  pullToken();
  return data;
};

export const getUser = async () => {
  const { data } = await axiosInstance.get('/users/current');
  return data;
};
