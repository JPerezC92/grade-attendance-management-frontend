import { Course } from 'src/interfaces/Course';
import { CourseWithCourseRecords } from 'src/interfaces/CourseDetail';

export interface CourseState {
  isLoading: boolean;
  courses: Course[];
  currentCourse: CourseWithCourseRecords | null;
}

export const courseInitialState: CourseState = {
  isLoading: false,
  courses: [],
  currentCourse: null,
};
