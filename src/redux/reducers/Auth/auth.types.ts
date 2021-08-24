export interface User {
  id: string;
  email: string;
  displayName: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  user: User | null;
}

export const AuthInitialState: AuthState = {
  user: null,
  isLoggedIn: false,
};
