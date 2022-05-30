import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async users => {
  try {
    const { data } = await axios.post('/users/signup', users);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logIn = createAsyncThunk('auth/login', async users => {
  try {
    const { data } = await axios.post('users/login', users);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.post('users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
});

const getRefreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  console.log(thunkAPI);
});

const authOperations = { register, logIn, logOut, getRefreshUser };

export default authOperations;
