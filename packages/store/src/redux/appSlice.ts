import { createSlice } from '@reduxjs/toolkit';
import { IAppStore } from './types';

export const appSlice = createSlice({
  name: 'authSlice',
  initialState: { isLogged: false } as IAppStore,
  reducers: {
    logIn: (state) => {
      state.isLogged = true;
    },
    logOut: (state) => {
      state.isLogged = false;
    },
  },
});

export const appReducer = appSlice.reducer;
