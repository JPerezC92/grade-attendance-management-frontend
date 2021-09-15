import Cookies from 'js-cookie';
import { AppThunk } from 'src/redux';
import { authActions } from './auth.slice';
import { LaravelAuthRepository } from 'src/modules/auth/repositories';
import { isServerErrorResponse } from 'src/helpers/assertions';
import { ServerErrorResponse } from 'src/shared/types';
import { RegisterUserInformation } from '../types';

const laravelAuthRepository = new LaravelAuthRepository();

// function isString(val: any): val is string {
//   return typeof val === 'string';
// }

export const startLogin = (
  email: string,
  password: string
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  _getState
) => {
  const response = await laravelAuthRepository.login({
    email,
    password,
  });

  if (isServerErrorResponse(response)) {
    return response;
  }

  dispatch(authActions.login(response.payload));
};

export const startRegister = (
  registerUserInformation: RegisterUserInformation
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  _getState
) => {
  const response = await laravelAuthRepository.register(
    registerUserInformation
  );

  if (isServerErrorResponse(response)) {
    return response;
  }

  dispatch(authActions.login(response.payload));
};

export const startLogout = (): AppThunk => (dispatch, _getState) => {
  laravelAuthRepository.logout();

  dispatch(authActions.logout());
};

export const startVerifyToken = (): AppThunk<
  Promise<ServerErrorResponse | void>
> => async (dispatch, _getState) => {
  dispatch(authActions.startLoading());
  const token = Cookies.get('token');

  const response = await laravelAuthRepository.userInfo(token);

  dispatch(authActions.finishLoading());
  if (isServerErrorResponse(response)) return response;

  dispatch(authActions.login(response.payload));
};
