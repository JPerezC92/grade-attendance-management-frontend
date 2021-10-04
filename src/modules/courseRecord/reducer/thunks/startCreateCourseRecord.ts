import {
  isCurrentCourseLoaded,
  isServerErrorResponse,
} from 'src/helpers/assertions';
import { courseAction } from 'src/modules/course/reducer';
import { AppThunk } from 'src/redux';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';
import { LaravelCourseRecordRepository } from '../../repositories';
import { CourseRecord, CourseRecordRegister } from '../../types';

const laravelCourseRecordRepository = new LaravelCourseRecordRepository();

export const startCreateCourseRecord = (
  courseRecord: Omit<CourseRecordRegister, 'instructorId' | 'courseId'>
): AppThunk<
  Promise<ServerErrorResponse | SuccessfulResponse<CourseRecord>>
> => async (dispatch, getState) => {
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
  });

  if (isServerErrorResponse(response)) return response;

  dispatch(courseAction.addNewCourseRecord(response.payload));

  return response;
};
