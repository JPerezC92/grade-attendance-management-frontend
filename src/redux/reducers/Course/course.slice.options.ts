import { PayloadAction, Draft } from '@reduxjs/toolkit';
import { Course } from 'src/interfaces';
import { CourseWithCourseRecords } from 'src/interfaces/CourseDetail';
import { CourseState } from 'src/redux';

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

const startLoading = (state: Draft<CourseState>): void => {
  state.isLoading = true;
};

const setCurrentCourse = (
  state: Draft<CourseState>,
  action: PayloadAction<CourseWithCourseRecords>
): void => {
  state.currentCourse = action.payload;
};

const finishLoading = (state: Draft<CourseState>): void => {
  state.isLoading = false;
};

export const courseSliceOptions = {
  setCourses,
  addNewCourse,
  setCurrentCourse,
  startLoading,
  finishLoading,
};
