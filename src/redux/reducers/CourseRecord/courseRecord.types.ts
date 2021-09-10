import { CourseRecord } from 'src/interfaces';

export interface CourseRecordState {
  isLoading: boolean;
  currentCourseRecord: CourseRecord | null;
}

export const courseRecordInitialState: CourseRecordState = {
  isLoading: false,
  currentCourseRecord: null,
};
