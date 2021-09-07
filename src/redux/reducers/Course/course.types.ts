import { Course } from 'src/interfaces/Course';
import { CourseWithCourseRecords } from 'src/interfaces';

export interface CourseState {
  isLoading: boolean;
  isLoadingCurrentCourse: boolean;
  courses: Course[];
  currentCourse: CourseWithCourseRecords | null;
}

export const courseInitialState: CourseState = {
  isLoading: false,
  isLoadingCurrentCourse: false,
  courses: [],
  currentCourse: null,
};
