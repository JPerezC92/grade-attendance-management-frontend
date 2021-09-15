import { User } from '../types';

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
  isLoadingVerifyToken: boolean;
}

export const AuthInitialState: AuthState = {
  user: null,
  isLoggedIn: false,
  isLoadingVerifyToken: false,
};
