import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { CourseRecord } from 'src/interfaces';
import { CourseRecordState } from 'src/redux';

const setCurrentCourseRecord = (
  state: Draft<CourseRecordState>,
  action: PayloadAction<CourseRecord>
): void => {
  state.currentCourseRecord = action.payload;
};

export const courseRecordSliceOptions = {
  setCurrentCourseRecord,
};
