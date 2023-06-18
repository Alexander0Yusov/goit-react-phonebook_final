import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUser, login, logout, signUp } from './authOperations';
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
    const token = thunkAPI.getState().authCombine.token;
    if (!token) {
      console.log('Токена нет');
      return thunkAPI.rejectWithValue('No valid token');
    }
    pushToken(token);
    console.log('token ', token);
    try {
      const res = await getUser();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
