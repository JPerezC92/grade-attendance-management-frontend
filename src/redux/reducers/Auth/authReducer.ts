import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  isLoggedIn: boolean;
  displayName: string | null;
  uid: string;
}

export interface AuthState {
  user: User;
  currentRequestId: string | undefined;
  error: string | null;
}

const initialState = {
  user: { isLoggedIn: false },
  currentRequestId: undefined,
  error: null,
} as AuthState;

export const authSlice = createSlice({
  name: '[AUTH]',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<Omit<User, 'isLoggedIn'>>) => {
      const { displayName, uid } = action.payload;

      state.user = {
        isLoggedIn: true,
        displayName,
        uid,
      };
      return state;
    },
    logout: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const authActions = authSlice.actions;

export const authReducer = authSlice.reducer;
