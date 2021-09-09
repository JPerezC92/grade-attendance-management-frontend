import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Activity } from 'src/interfaces';
import { ScoreCalculation } from 'src/interfaces/ScoreCalculation';

interface ActivityState {
  scoresCalculation: ScoreCalculation[];
  activities: Activity[];
}

const activityInitialState: ActivityState = {
  scoresCalculation: [],
  activities: [],
};

const activitySlice = createSlice({
  name: 'ACTIVITY',
  initialState: activityInitialState,
  reducers: {
    setActivities: (state, action: PayloadAction<Activity[]>) => {
      state.activities = action.payload;
    },
    setScoresCalculation: (
      state,
      action: PayloadAction<ScoreCalculation[]>
    ) => {
      state.scoresCalculation = action.payload;
    },
  },
});

export const activityAction = activitySlice.actions;
export const activityReducer = activitySlice.reducer;
