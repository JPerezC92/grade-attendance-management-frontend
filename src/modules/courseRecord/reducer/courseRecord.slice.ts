import { createSlice } from '@reduxjs/toolkit';
import { courseRecordInitialState } from './courseRecord.types';
import { courseRecordSliceOptions } from './courseRecord.slice.options';

const courseRecordSlice = createSlice({
  name: '[COURSE_RECORD]',
  initialState: courseRecordInitialState,
  reducers: courseRecordSliceOptions,
});

export const courseRecordAction = courseRecordSlice.actions;
export const courseRecordReducer = courseRecordSlice.reducer;
