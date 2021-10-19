import {
  isCurrentCourseRecordLoaded,
  isServerErrorResponse,
} from 'src/helpers/assertions';
import { Activity } from 'src/modules/activity/types';
import { startLoadingCourseRecord } from 'src/modules/courseRecord/reducer/thunks';
import { AppThunk } from 'src/redux';
import { ServerErrorResponse } from 'src/shared/types';
import { gradeAction } from '.';
import { LaravelScoreAssignedRepository } from '../repositories/LaravelScoreAssignedRepository';
import { LaravelScoreRepository } from '../../score/repositories/LaravelScoreRepository';
import { Score, ScoreAssigned } from '../types';

const laravelScoreRepository = new LaravelScoreRepository();
const laravelScoreAssignedRepository = new LaravelScoreAssignedRepository();

export const startLoadingCurrentlyGrading = (
  score: Score,
  activity: Activity
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const { currentCourseRecord } = getState().courseRecordReducer;

  if (!currentCourseRecord.isLoaded) {
    return;
  }
  const response = await laravelScoreRepository.getById(
    score.id,
    currentCourseRecord.id
  );

  if (isServerErrorResponse(response)) return response;

  dispatch(
    gradeAction.setCurrentlyGrading({
      scoresAssigned: response.payload,
      score: score,
      activity: activity,
    })
  );
};

export const startUpdateScoresAssigned = (
  scoresAssigned: ScoreAssigned[]
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const { currentCourseRecord } = getState().courseRecordReducer;
  const response = await laravelScoreAssignedRepository.updateMany(
    scoresAssigned
  );

  if (isServerErrorResponse(response)) return response;

  if (isCurrentCourseRecordLoaded(currentCourseRecord))
    dispatch(startLoadingCourseRecord(currentCourseRecord.id));
};
