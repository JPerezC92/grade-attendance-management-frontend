import { isServerErrorResponse } from 'src/helpers/assertions';
import { Activity } from 'src/modules/activity/types';
import { AppThunk } from 'src/redux';
import { ServerErrorResponse } from 'src/shared/types';
import { gradeAction } from '.';
import { LaravelScoreAssignedRepository } from '../repositories/LaravelScoreAssignedRepository';
import { LaravelScoreRepository } from '../repositories/LaravelScoreRepository';
import { Score, ScoreAssigned } from '../types';

const laravelScoreRepository = new LaravelScoreRepository();
const laravelScoreAssignedRepository = new LaravelScoreAssignedRepository();

export const startLoadingCurrentlyGrading = (
  score: Score,
  activity: Activity
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  const response = await laravelScoreRepository.getById(score.id);

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
): AppThunk<Promise<ServerErrorResponse | void>> => async (_dispatch, _) => {
  const response = await laravelScoreAssignedRepository.updateMany(
    scoresAssigned
  );

  if (isServerErrorResponse(response)) return response;
};
