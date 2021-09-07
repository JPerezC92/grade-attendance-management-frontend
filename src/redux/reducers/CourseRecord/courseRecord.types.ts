import { CourseRecord } from 'src/interfaces';

export interface CourseRecordState {
  currentCourseRecord: CourseRecord | null;
}

export const courseRecordInitialState: CourseRecordState = {
  currentCourseRecord: null,
};
