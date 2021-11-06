import { createSlice } from '@reduxjs/toolkit';

const storeCleanSlice = createSlice({
  name: 'store',
  initialState: {},
  reducers: {
    clean: () => ({}),
  },
});

export const storeAction = storeCleanSlice.actions;
export const storeReducer = storeCleanSlice.reducer;
