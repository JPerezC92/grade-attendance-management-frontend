import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Period } from '../types';

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
    addNewPeriod: (state, action: PayloadAction<Period>) => {
      state.periods = [...state.periods, action.payload];
    },
    update: (state, action: PayloadAction<Period>) => {
      state.periods = state.periods.map((period) =>
        period.id === action.payload.id ? action.payload : period
      );
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
