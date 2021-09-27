import { CurrentCourseLoaded } from 'src/modules/course/types';
import { NotLoaded } from 'src/shared/types';

export const isCurrentCourseLoaded = (
  currentCourseLoaded: CurrentCourseLoaded | NotLoaded
): currentCourseLoaded is CurrentCourseLoaded => {
  return currentCourseLoaded.isLoaded === true;
};
