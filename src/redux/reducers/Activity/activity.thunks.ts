import { isServerErrorResponse } from 'src/helpers/assertions';
import { Activity, CreateActivity, ServerErrorResponse } from 'src/interfaces';
import { AppThunk, startLoadingCourseRecord } from 'src/redux';
import { LaravelActivityRepository } from 'src/repositories';

const laravelActivityRepository = new LaravelActivityRepository();

export const startCreateActivity = (
  createActivity: CreateActivity
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const {
    courseRecordReducer: { currentCourseRecord },
  } = getState();

  const response = await laravelActivityRepository.create(createActivity);

  if (isServerErrorResponse(response)) return response;

  dispatch(startLoadingCourseRecord(currentCourseRecord.id));
};

export const startUpdateActivity = (
  activity: Activity & { scoresQuantity: number }
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const {
    courseRecordReducer: { currentCourseRecord },
  } = getState();

  const response = await laravelActivityRepository.update(activity);

  if (isServerErrorResponse(response)) return response;

  dispatch(startLoadingCourseRecord(currentCourseRecord.id));
};

export const startDeleteActivity = (
  activity: Activity
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const {
    courseRecordReducer: { currentCourseRecord },
  } = getState();

  const response = await laravelActivityRepository.delete(activity.id);

  if (isServerErrorResponse(response)) return response;

  dispatch(startLoadingCourseRecord(currentCourseRecord.id));
};
