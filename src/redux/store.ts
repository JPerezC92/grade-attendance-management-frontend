import {
  configureStore,
  ThunkAction,
  Action,
  AnyAction,
  combineReducers,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { authReducer } from 'src/modules/auth/reducer';
import { activityReducer } from 'src/modules/activity/reducer';
import { periodReducer } from 'src/modules/period/reducer';
import { courseReducer } from 'src/modules/course/reducer';
import { courseRecordReducer } from 'src/modules/courseRecord/reducer';
import { studentReducer } from 'src/modules/student/reducer';
import { attendanceReducer } from 'src/modules/attendance/reducer';
import { gradeReducer } from 'src/modules/grade/reducer';
import { storeReducer } from './clean.reducer';

export const reducer = {
  authReducer,
  periodReducer,
  courseReducer,
  courseRecordReducer,
  studentReducer,
  activityReducer,
  attendanceReducer,
  gradeReducer,
  storeReducer,
};

const combinedReducers = combineReducers({ ...reducer });

const store = configureStore({
  reducer: (
    state: ReturnType<typeof combinedReducers> | undefined,
    action: AnyAction
  ) => {
    if (action.type === 'store/clean') {
      state = undefined;
    }
    return combinedReducers(state, action);
  },
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
