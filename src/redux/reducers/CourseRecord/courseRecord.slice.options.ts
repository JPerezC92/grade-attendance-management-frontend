import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { CourseRecord } from 'src/interfaces';
import { CourseRecordState } from 'src/redux';

const setCurrentCourseRecord = (
  state: Draft<CourseRecordState>,
  action: PayloadAction<CourseRecord>
): void => {
  state.currentCourseRecord = action.payload;
};

const startLoading = (state: Draft<CourseRecordState>): void => {
  state.isLoading = true;
};

const finishLoading = (state: Draft<CourseRecordState>): void => {
  state.isLoading = true;
};

export const courseRecordSliceOptions = {
  setCurrentCourseRecord,
  startLoading,
  finishLoading,
};
