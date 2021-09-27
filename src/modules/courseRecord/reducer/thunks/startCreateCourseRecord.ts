import {
  isCurrentCourseLoaded,
  isServerErrorResponse,
} from 'src/helpers/assertions';
import { courseAction } from 'src/modules/course/reducer';
import { AppThunk } from 'src/redux';
import { ServerErrorResponse } from 'src/shared/types';
import { LaravelCourseRecordRepository } from '../../repositories';
import { CourseRecordRegister } from '../../types';

const laravelCourseRecordRepository = new LaravelCourseRecordRepository();

export const startCreateCourseRecord = (
  courseRecord: Omit<
    CourseRecordRegister,
    'instructorId' | 'courseId' | 'periodId'
  >
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const {
    authReducer: { user },
    courseReducer: { currentCourse },
  } = getState();

  if (!isCurrentCourseLoaded(currentCourse)) {
    return;
  }

  const response = await laravelCourseRecordRepository.create({
    ...courseRecord,
    instructorId: user.id,
    courseId: currentCourse.id,
    periodId: 1,
  });

  if (isServerErrorResponse(response)) return response;

  dispatch(courseAction.addNewCourseRecord(response.payload));
};
