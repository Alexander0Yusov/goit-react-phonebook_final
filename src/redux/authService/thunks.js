import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser, login, logout, signUp } from './operations';
import { pushToken } from 'redux/axiosHerokuInstance';

export const signUpThunk = createAsyncThunk(
  'auth/signUp',
  async (data, thunkAPI) => {
    try {
      return await signUp(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      return await login(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      return await logout();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserThunk = createAsyncThunk(
  'auth/getUser',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().authCombine.token;
      if (!token) {
        console.log('Токена нет');
        return;
      }

      pushToken(token);

      console.log('token ', token);

      const res = await getUser();
      console.log('res ', res);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
