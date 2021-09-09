import { AppThunk } from 'src/redux/store/store';
import { ServerErrorResponse } from 'src/interfaces';
import { isServerErrorResponse } from 'src/helpers/assertions';
import { LaravelCourseRecordRepository } from 'src/repositories/LaravelCourseRecordRepository';
import { activityAction, courseRecordAction, studentAction } from 'src/redux';

const laravelCourseRecordRepository = new LaravelCourseRecordRepository();

export const startLoadingCourseRecord = (
  courseRecordId: number
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  const response = await laravelCourseRecordRepository.getById(courseRecordId);

  if (isServerErrorResponse(response)) return response;

  dispatch(studentAction.setStudents(response.payload.students));
  dispatch(activityAction.setActivities(response.payload.activities));
  dispatch(
    activityAction.setScoresCalculation(response.payload.scoresCalculation)
  );
  dispatch(courseRecordAction.setCurrentCourseRecord(response.payload));
};
