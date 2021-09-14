import { User } from 'src/interfaces/Folder';

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
