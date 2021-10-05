import { isServerErrorResponse } from 'src/helpers/assertions';
import { courseAction } from 'src/modules/course/reducer';
import { AppThunk } from 'src/redux';
import { ServerErrorResponse } from 'src/shared/types';
import { LaravelCourseRecordRepository } from '../../repositories';
import { CourseRecord } from '../../types';

const laravelCourseRecordRepository = new LaravelCourseRecordRepository();

export const startUpdateCourseRecord = (
  courseRecord: CourseRecord
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  const response = await laravelCourseRecordRepository.update(courseRecord);

  if (isServerErrorResponse(response)) return response;

  dispatch(courseAction.updateCourseRecord(response.payload));
};
