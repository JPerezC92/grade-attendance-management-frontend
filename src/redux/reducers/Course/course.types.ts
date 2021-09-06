import { Course } from 'src/interfaces/Course';

export interface CourseState {
  isLoading: boolean;
  courses: Course[];
}

export const courseInitialState: CourseState = {
  isLoading: false,
  courses: [],
};
