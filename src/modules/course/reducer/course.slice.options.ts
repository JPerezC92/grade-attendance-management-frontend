import { PayloadAction, Draft } from '@reduxjs/toolkit';
import { CourseRecord } from 'src/modules/courseRecord/types';
import { CourseState } from '.';
import { Course, CourseWithCourseRecords } from '../types';

const setCourses = (
  state: Draft<CourseState>,
  action: PayloadAction<Course[]>
): void => {
  state.courses = action.payload;
};

const addNewCourse = (
  state: Draft<CourseState>,
  action: PayloadAction<Course>
): void => {
  state.courses = [...state.courses, action.payload];
};

const updateCourse = (
  state: Draft<CourseState>,
  action: PayloadAction<Course>
): void => {
  state.courses = state.courses.map((course) =>
    course.id === action.payload.id ? action.payload : course
  );
};

const setCurrentCourse = (
  state: Draft<CourseState>,
  action: PayloadAction<CourseWithCourseRecords>
): void => {
  state.currentCourse = { isLoaded: true, ...action.payload };
};

const addNewCourseRecord = (
  state: Draft<CourseState>,
  action: PayloadAction<CourseRecord>
): void => {
  if (state.currentCourse.isLoaded) {
    state.currentCourse.course_records = [
      ...state.currentCourse.course_records,
      action.payload,
    ];
  }
};

const startLoading = (state: Draft<CourseState>): void => {
  state.isLoaded = false;
};

const finishLoading = (state: Draft<CourseState>): void => {
  state.isLoaded = true;
};

export const courseSliceOptions = {
  setCourses,
  addNewCourse,
  updateCourse,
  setCurrentCourse,
  addNewCourseRecord,
  startLoading,
  finishLoading,
};
