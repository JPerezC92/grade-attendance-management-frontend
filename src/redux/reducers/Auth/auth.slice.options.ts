import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'src/interfaces/Folder';
import { AuthInitialState, AuthState } from './auth.types';

const login = (state: Draft<AuthState>, action: PayloadAction<User>): void => {
  state.isLoggedIn = true;
  state.user = action.payload;
};

const logout = (): AuthState => AuthInitialState;
export const AuthSliceOptions = { login, logout };
