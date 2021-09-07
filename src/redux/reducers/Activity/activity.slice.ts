import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Activity } from 'src/interfaces';

interface ActivityState {
  activities: Activity[];
}

const activityInitialState: ActivityState = {
  activities: [],
};

const activitySlice = createSlice({
  name: 'ACTIVITY',
  initialState: activityInitialState,
  reducers: {
    setActivities: (state, action: PayloadAction<Activity[]>) => {
      state.activities = action.payload;
    },
  },
});

export const activityAction = activitySlice.actions;
export const activityReducer = activitySlice.reducer;
