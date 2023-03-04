import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsAPI, UserAPI } from 'services/api';

export const registerRequest = createAsyncThunk(
  'user/register',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await UserAPI.register(formData);
      localStorage.setItem('token', response.token);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginRequest = createAsyncThunk(
  'user/login',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await UserAPI.login(formData);
      localStorage.setItem('token', response.token);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutRequest = createAsyncThunk(
  'user/logOut',
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserAPI.logOut();
      localStorage.removeItem('token');

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUserRequest = createAsyncThunk(
  'user/getCurrent',
  async (_, { rejectWithValue }) => {
    try {
      const response = await UserAPI.getUserDetails();

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getContactsRequest = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ContactsAPI.getContacts();

      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactRequest = createAsyncThunk(
  'contacts/addContact',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await ContactsAPI.addContact(formData);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactRequest = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const response = await ContactsAPI.deleteContact(contactId);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
