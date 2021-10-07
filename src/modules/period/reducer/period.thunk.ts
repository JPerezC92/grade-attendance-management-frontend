import { isServerErrorResponse } from 'src/helpers/assertions';
import { startLoadingCourseContent } from 'src/modules/course/reducer';
import { AppThunk } from 'src/redux';
import { ServerErrorResponse } from 'src/shared/types';
import { LaravelPeriodRepository } from '../repositories';
import { CreatePeriod, Period } from '../types';
import { periodAction } from './period.slice';

const laravelPeriodRepository = new LaravelPeriodRepository();

export const startLoadingPeriods = (): AppThunk<
  Promise<ServerErrorResponse | void>
> => async (dispatch, _) => {
  dispatch(periodAction.startLoading());

  const response = await laravelPeriodRepository.getAll();

  dispatch(periodAction.finishLoading());

  if (isServerErrorResponse(response)) return response;

  dispatch(periodAction.setPeriods(response.payload));
};

export const startCreatePeriod = (
  createPeriod: CreatePeriod
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  dispatch(periodAction.startLoading());

  const response = await laravelPeriodRepository.create(createPeriod);

  dispatch(periodAction.finishLoading());

  if (isServerErrorResponse(response)) return response;

  dispatch(periodAction.addNewPeriod(response.payload));
};

export const startUpdatePeriod = (
  period: Period
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  dispatch(periodAction.startLoading());

  const response = await laravelPeriodRepository.update(period);

  dispatch(periodAction.finishLoading());

  if (isServerErrorResponse(response)) return response;

  dispatch(periodAction.update(response.payload));
};

export const startArchivePeriod = (
  period: Period
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const { currentCourse } = getState().courseReducer;
  dispatch(periodAction.startLoading());

  const response = await laravelPeriodRepository.archive(period);

  dispatch(periodAction.finishLoading());

  if (isServerErrorResponse(response)) return response;

  dispatch(periodAction.update(response.payload));

  if (currentCourse.isLoaded) {
    dispatch(startLoadingCourseContent(currentCourse.id));
  }
};

export const startUnarchivePeriod = (
  period: Period
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const { currentCourse } = getState().courseReducer;
  dispatch(periodAction.startLoading());

  const response = await laravelPeriodRepository.unarchive(period);

  dispatch(periodAction.finishLoading());

  if (isServerErrorResponse(response)) return response;

  dispatch(periodAction.update(response.payload));

  if (currentCourse.isLoaded) {
    dispatch(startLoadingCourseContent(currentCourse.id));
  }
};
