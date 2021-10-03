import { AppThunk } from 'src/redux';
import { isServerErrorResponse } from 'src/helpers/assertions';

import { courseRecordAction } from 'src/modules/courseRecord/reducer';
import { activityAction } from 'src/modules/activity/reducer';
import { attendanceAction } from 'src/modules/attendance/reducer';
import { studentAction } from 'src/modules/student/reducer';
import { LaravelCourseRecordRepository } from '../../repositories';
import { ServerErrorResponse } from 'src/shared/types';

const laravelCourseRecordRepository = new LaravelCourseRecordRepository();

export const startLoadingCourseRecord = (
  courseRecordId: number
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  dispatch(courseRecordAction.startLoading());

  const response = await laravelCourseRecordRepository.getById(courseRecordId);

  if (isServerErrorResponse(response)) return response;

  dispatch(studentAction.setStudents(response.payload.students));
  dispatch(attendanceAction.setAttendances(response.payload.attendances));
  dispatch(activityAction.setActivities(response.payload.activities));
  // dispatch(
  //   activityAction.setScoresCalculation(response.payload.scoresCalculation)
  // );
  dispatch(
    courseRecordAction.setCurrentCourseRecord(response.payload.courseRecord)
  );
};
