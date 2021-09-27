import { AppThunk } from 'src/redux';
import { isServerErrorResponse } from 'src/helpers/assertions';
import { startLoadingCourseRecord } from 'src/modules/courseRecord/reducer/thunks';
import { ServerErrorResponse } from 'src/shared/types';

import { Activity, CreateActivity } from '../types';
import { LaravelActivityRepository } from '../repositories';
import { isCurrentCourseRecordLoaded } from 'src/helpers/assertions';

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

  if (isCurrentCourseRecordLoaded(currentCourseRecord)) {
    dispatch(startLoadingCourseRecord(currentCourseRecord.id));
  }
};

export const startUpdateActivity = (
  activity: Activity
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const {
    courseRecordReducer: { currentCourseRecord },
  } = getState();

  const response = await laravelActivityRepository.update(activity);

  if (isServerErrorResponse(response)) return response;

  if (isCurrentCourseRecordLoaded(currentCourseRecord)) {
    dispatch(startLoadingCourseRecord(currentCourseRecord.id));
  }
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

  if (isCurrentCourseRecordLoaded(currentCourseRecord)) {
    dispatch(startLoadingCourseRecord(currentCourseRecord.id));
  }
};
