import { createSlice } from '@reduxjs/toolkit';
import {
  getContactsDBThunk,
  postContactDBThunk,
  putContactDBThunk,
  deleteContactDBThunk,
} from './thunks';

import {
  handlerPending,
  handlerRejected,
  handlerFulfilledGet,
  handlerFulfilledPost,
  handlerFulfilledPut,
  handlerFulfilledDelete,
} from './handleReducers';

const contactsDBSlice = createSlice({
  name: 'contactsDB',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    //=====GET
    [getContactsDBThunk.pending]: handlerPending,
    [getContactsDBThunk.fulfilled]: handlerFulfilledGet,
    [getContactsDBThunk.rejected]: handlerRejected,
    //=====POST
    [postContactDBThunk.pending]: handlerPending,
    [postContactDBThunk.fulfilled]: handlerFulfilledPost,
    [postContactDBThunk.rejected]: handlerRejected,
    //=====PUT
    [putContactDBThunk.pending]: handlerPending,
    [putContactDBThunk.fulfilled]: handlerFulfilledPut,
    [putContactDBThunk.rejected]: handlerRejected,
    //=====DELETE
    [deleteContactDBThunk.pending]: handlerPending,
    [deleteContactDBThunk.fulfilled]: handlerFulfilledDelete,
    [deleteContactDBThunk.rejected]: handlerRejected,
  },
});

export const contactsDBReducer = contactsDBSlice.reducer;
