import { createSlice } from '@reduxjs/toolkit';
import { AuthSliceOptions } from './auth.slice.options';
import { AuthInitialState } from './auth.types';

export const authSlice = createSlice({
  name: '[AUTH]',
  initialState: AuthInitialState,
  reducers: AuthSliceOptions,
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
