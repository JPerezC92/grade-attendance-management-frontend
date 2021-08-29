import { createSlice } from '@reduxjs/toolkit';
import { fileSystemSliceOptions } from './fileSystem.slice.options';
import { fileSystemInitialState } from './fileSystem.types';

const fileSystemSlice = createSlice({
  name: '[FILE_SYSTEM]',
  initialState: fileSystemInitialState,
  reducers: fileSystemSliceOptions,
});

export const fileSystemActions = fileSystemSlice.actions;
export const fileSystemReducer = fileSystemSlice.reducer;
