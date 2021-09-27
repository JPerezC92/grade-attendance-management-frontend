import { NotLoaded } from 'src/shared/types';
import { CurrentCourseRecordLoaded } from '../types';



export interface CourseRecordState {
  isLoading: boolean;
  currentCourseRecord: CurrentCourseRecordLoaded | NotLoaded;
}

export const courseRecordInitialState: CourseRecordState = {
  isLoading: false,
  currentCourseRecord: { isLoaded: false },
};
