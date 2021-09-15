import { createSlice } from '@reduxjs/toolkit';
import { courseSliceOptions } from './course.slice.options';
import { courseInitialState } from './course.types';

const courseSlice = createSlice({
  name: '[COURSE]',
  initialState: courseInitialState,
  reducers: courseSliceOptions,
});

export const courseAction = courseSlice.actions;
export const courseReducer = courseSlice.reducer;
