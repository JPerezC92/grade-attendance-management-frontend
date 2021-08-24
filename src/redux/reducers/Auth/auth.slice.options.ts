import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { AuthInitialState, AuthState, User } from './auth.types';

const login = (state: Draft<AuthState>, action: PayloadAction<User>): void => {
  const { id, displayName, email } = action.payload;

  state.isLoggedIn = true;
  state.user = {
    id,
    displayName,
    email,
  };
};

const logout = (): AuthState => AuthInitialState;
export const AuthSliceOptions = { login, logout };
