import { createSlice } from '@reduxjs/toolkit';
import { studentSliceOptions } from './student.slice.options';
import { studentInitialState } from './student.type';

const studentSlice = createSlice({
  name: '[STUDENT]',
  initialState: studentInitialState,
  reducers: studentSliceOptions,
});

export const studentAction = studentSlice.actions;
export const studentReducer = studentSlice.reducer;
