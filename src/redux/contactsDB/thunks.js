import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContactsDB,
  postContactDB,
  deleteContactDB,
  putContactDB,
} from './requests';

// не отрабатывает редьюсер .rejected, поэтому try-catch

export const getContactsDBThunk = createAsyncThunk(
  'contactsDB/getContacts',
  async () => {
    try {
      return await getContactsDB();
    } catch (error) {
      return error;
    }
  }
);

export const postContactDBThunk = createAsyncThunk(
  'contactsDB/postContact',
  async item => {
    try {
      return await postContactDB(item);
    } catch (error) {
      return error;
    }
  }
);

export const putContactDBThunk = createAsyncThunk(
  'contactsDB/putContact',
  async (id, item) => {
    try {
      return await putContactDB(id, item);
    } catch (error) {
      return error;
    }
  }
);

export const deleteContactDBThunk = createAsyncThunk(
  'contactsDB/deleteContact',
  async id => {
    try {
      return await deleteContactDB(id);
    } catch (error) {
      return error;
    }
  }
);
