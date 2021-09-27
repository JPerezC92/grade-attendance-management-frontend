import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Period } from '../types';

interface PeriodState {
  isLoaded: boolean;
  periods: Period[];
}

const periodInitialState: PeriodState = {
  isLoaded: false,
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
      state.isLoaded = false;
    },
    finishLoading: (state) => {
      state.isLoaded = true;
    },
  },
});

export const periodAction = periodSlice.actions;
export const periodReducer = periodSlice.reducer;
