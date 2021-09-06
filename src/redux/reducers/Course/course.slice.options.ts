import { PayloadAction, Draft } from '@reduxjs/toolkit';
import { Course } from 'src/interfaces';
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

const finishLoading = (state: Draft<CourseState>): void => {
  state.isLoading = false;
};

export const courseSliceOptions = {
  setCourses,
  addNewCourse,
  startLoading,
  finishLoading,
};
