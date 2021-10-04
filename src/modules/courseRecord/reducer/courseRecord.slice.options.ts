import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { CourseRecordState } from '.';
import { CourseRecord } from '../types';

const setCurrentCourseRecord = (
  state: Draft<CourseRecordState>,
  action: PayloadAction<CourseRecord>
): void => {
  state.currentCourseRecord = { isLoaded: true, ...action.payload };
};

const startLoading = (state: Draft<CourseRecordState>): void => {
  state.currentCourseRecord.isLoaded = false;
};

const finishLoading = (state: Draft<CourseRecordState>): void => {
  state.currentCourseRecord.isLoaded = true;
};

export const courseRecordSliceOptions = {
  setCurrentCourseRecord,
  startLoading,
  finishLoading,
};
