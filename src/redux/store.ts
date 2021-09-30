import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authReducer } from 'src/modules/auth/reducer';
import { activityReducer } from 'src/modules/activity/reducer';
import { periodReducer } from 'src/modules/period/reducer';
import { courseReducer } from 'src/modules/course/reducer';
import { courseRecordReducer } from 'src/modules/courseRecord/reducer';
import { studentReducer } from 'src/modules/student/reducer';
import { attendanceReducer } from 'src/modules/attendance/reducer';
import { gradeReducer } from 'src/modules/grade/reducer';

export const reducer = {
  authReducer,
  periodReducer,
  courseReducer,
  courseRecordReducer,
  studentReducer,
  activityReducer,
  attendanceReducer,
  gradeReducer,
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
