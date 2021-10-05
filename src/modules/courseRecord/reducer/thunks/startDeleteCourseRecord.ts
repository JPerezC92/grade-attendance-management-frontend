import { isServerErrorResponse } from 'src/helpers/assertions';
import { courseAction } from 'src/modules/course/reducer';
import { AppThunk } from 'src/redux';
import { ServerErrorResponse } from 'src/shared/types';
import { LaravelCourseRecordRepository } from '../../repositories';

const laravelCourseRecordRepository = new LaravelCourseRecordRepository();

export const startDeleteCourseRecord = (
  courseRecordId: number
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  const response = await laravelCourseRecordRepository.delete(courseRecordId);

  if (isServerErrorResponse(response)) return response;

  dispatch(courseAction.deleteCourseRecord(courseRecordId));
};
