import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { loginThunk, logoutThunk, getUserThunk, signUpThunk } from './thunks';
import {
  pendingHandler,
  rejectedHandler,
  loginFulfilledHandler,
  logoutFulfilledHandler,
  getUserFulfilledHandler,
} from './stateHandlers';

const initialState = {
  token: '',
  isLoading: false,
  error: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUpThunk.fulfilled, loginFulfilledHandler)
      .addCase(loginThunk.fulfilled, loginFulfilledHandler)
      .addCase(logoutThunk.fulfilled, logoutFulfilledHandler)
      .addCase(getUserThunk.fulfilled, getUserFulfilledHandler)
      .addMatcher(
        isAnyOf(
          signUpThunk.pending,
          loginThunk.pending,
          logoutThunk.pending,
          getUserThunk.pending
        ),
        pendingHandler
      )
      .addMatcher(
        isAnyOf(
          signUpThunk.rejected,
          loginThunk.rejected,
          logoutThunk.rejected,
          getUserThunk.rejected
        ),
        rejectedHandler
      );
  },
});

export const authReducer = authSlice.reducer;
