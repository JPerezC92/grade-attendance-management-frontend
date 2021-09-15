import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../types';
import { AuthInitialState, AuthState } from './auth.types';

const login = (state: Draft<AuthState>, action: PayloadAction<User>): void => {
  state.isLoggedIn = true;
  state.user = action.payload;
};

const startLoading = (state: Draft<AuthState>): void => {
  state.isLoadingVerifyToken = true;
};
const finishLoading = (state: Draft<AuthState>): void => {
  state.isLoadingVerifyToken = false;
};

const logout = (): AuthState => AuthInitialState;
export const AuthSliceOptions = { login, logout, startLoading, finishLoading };
