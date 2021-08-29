import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authReducer, fileSystemReducer } from '../reducers';

export const reducer = {
  authReducer,
  fileSystemReducer,
};

const store = configureStore({
  reducer,
});

type AppState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

export { store, useAppDispatch, useAppSelector };
