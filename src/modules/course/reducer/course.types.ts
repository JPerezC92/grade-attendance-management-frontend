import { NotLoaded } from 'src/shared/types';
import { Course, CurrentCourseLoaded } from '../types';

export interface CourseState {
  isLoaded: boolean;
  courses: Course[];
  currentCourse: CurrentCourseLoaded | NotLoaded;
}

export const courseInitialState: CourseState = {
  isLoaded: false,
  courses: [],
  currentCourse: { isLoaded: false },
};
