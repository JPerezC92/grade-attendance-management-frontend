import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { AuthInitialState, AuthState, User } from './auth.types';

const login = (_state: Draft<AuthState>, action: PayloadAction<User>): void => {
  const { id, displayName, email } = action.payload;

  _state.user = {
    id,
    displayName,
    email,
  };
};

const logout = (_state: Draft<AuthState>): void => {
  _state = AuthInitialState;
};

export const AuthSliceOptions = { login, logout };
