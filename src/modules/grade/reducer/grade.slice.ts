import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Activity } from 'src/modules/activity/types';
import { Score, ScoreAssignedWithStudentName } from '../types';
import { gradeInitialState } from './grade.types';
const gradeSlice = createSlice({
  name: '[GRADE]',
  initialState: gradeInitialState,
  reducers: {
    setCurrentlyGrading: (
      state,
      action: PayloadAction<{
        scoresAssigned: ScoreAssignedWithStudentName[];
        score: Score;
        activity: Activity;
      }>
    ) => {
      state.currentlyGrading = {
        isLoaded: true,
        scoresAssigned: action.payload.scoresAssigned,
        score: action.payload.score,
        activity: action.payload.activity,
      };
    },
  },
});

export const gradeAction = gradeSlice.actions;
export const gradeReducer = gradeSlice.reducer;
