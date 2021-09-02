import { createSlice } from '@reduxjs/toolkit';
import { attendanceSliceOptions } from './attendance.slice.options';
import { attendanceInitialState } from './attendance.types';

const attendanceSlice = createSlice({
  name: '[ATTENDANCE]',
  initialState: attendanceInitialState,
  reducers: attendanceSliceOptions,
});

export const attendanceAction = attendanceSlice.actions;
export const attendanceReducer = attendanceSlice.reducer;
