import {
  isCurrentCourseRecordLoaded,
  isServerErrorResponse,
} from 'src/helpers/assertions';
import { Activity } from 'src/modules/activity/types';
import { startLoadingCourseRecord } from 'src/modules/courseRecord/reducer/thunks';
import { Score } from 'src/modules/grade/types';
import { AppThunk } from 'src/redux';
import { ServerErrorResponse } from 'src/shared/types';
import { LaravelScoreRepository } from '../repositories';

const laravelScoreRepository = new LaravelScoreRepository();

export const startDeleteScore = (
  score: Score
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const {
    courseRecordReducer: { currentCourseRecord },
  } = getState();

  const response = await laravelScoreRepository.delete(score.id);

  if (isServerErrorResponse(response)) return response;

  if (isCurrentCourseRecordLoaded(currentCourseRecord)) {
    dispatch(startLoadingCourseRecord(currentCourseRecord.id));
  }
};

export const startCreateScore = (
  activity: Activity
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const {
    courseRecordReducer: { currentCourseRecord },
  } = getState();

  const response = await laravelScoreRepository.create(activity.id);

  if (isServerErrorResponse(response)) return response;

  if (isCurrentCourseRecordLoaded(currentCourseRecord)) {
    dispatch(startLoadingCourseRecord(currentCourseRecord.id));
  }
};
