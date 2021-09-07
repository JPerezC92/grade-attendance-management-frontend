import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  authReducer,
  courseRecordReducer,
  studentReducer,
  activityReducer,
  attendanceReducer,
  courseReducer,
} from 'src/redux/reducers';

export const reducer = {
  authReducer,
  courseRecordReducer,
  studentReducer,
  activityReducer,
  attendanceReducer,
  courseReducer,
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
