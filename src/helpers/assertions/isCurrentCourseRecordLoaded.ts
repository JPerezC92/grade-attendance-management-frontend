import { CurrentCourseRecordLoaded } from 'src/modules/courseRecord/types';
import { NotLoaded } from 'src/shared/types';

export const isCurrentCourseRecordLoaded = (
  currentCourseRecord: CurrentCourseRecordLoaded | NotLoaded
): currentCourseRecord is CurrentCourseRecordLoaded => {
  return currentCourseRecord.isLoaded === true;
};
