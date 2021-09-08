import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Period } from 'src/interfaces';

interface PeriodState {
  isLoading: boolean;
  periods: Period[];
}

const periodInitialState: PeriodState = {
  isLoading: false,
  periods: [],
};

const periodSlice = createSlice({
  name: '[PERIOD]',
  initialState: periodInitialState,
  reducers: {
    setPeriods: (state, action: PayloadAction<Period[]>) => {
      state.periods = action.payload;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    finishLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const periodAction = periodSlice.actions;
export const periodReducer = periodSlice.reducer;
