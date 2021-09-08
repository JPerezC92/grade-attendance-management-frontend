import { isServerErrorResponse } from 'src/helpers/assertions';
import { CreatePeriod, ServerErrorResponse } from 'src/interfaces';
import { AppThunk } from 'src/redux';
import { LaravelPeriodRepository } from 'src/repositories';
import { periodAction } from './period.slice';

const laravelPeriodRepository = new LaravelPeriodRepository();

export const startLoadingPeriods = (): AppThunk<
  Promise<ServerErrorResponse | void>
> => async (dispatch, getState) => {
  const {
    authReducer: { user },
  } = getState();

  dispatch(periodAction.startLoading());

  const response = await laravelPeriodRepository.getAll(user.id);

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
