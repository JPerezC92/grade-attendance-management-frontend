import { PayloadAction, Draft } from '@reduxjs/toolkit';
import { Course, CourseWithCourseRecords } from 'src/interfaces';
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

const setCurrentCourse = (
  state: Draft<CourseState>,
  action: PayloadAction<CourseWithCourseRecords>
): void => {
  state.currentCourse = action.payload;
};
const startLoading = (state: Draft<CourseState>): void => {
  state.isLoading = true;
};

const finishLoading = (state: Draft<CourseState>): void => {
  state.isLoading = false;
};
const startLoadingCurrentCourse = (state: Draft<CourseState>): void => {
  state.isLoadingCurrentCourse = true;
};

const finishLoadingCurrentCourse = (state: Draft<CourseState>): void => {
  state.isLoadingCurrentCourse = false;
};

export const courseSliceOptions = {
  setCourses,
  addNewCourse,
  setCurrentCourse,
  startLoading,
  finishLoading,
  startLoadingCurrentCourse,
  finishLoadingCurrentCourse,
};
