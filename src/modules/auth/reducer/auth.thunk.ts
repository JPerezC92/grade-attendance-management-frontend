import Cookies from 'js-cookie';
import { AppThunk } from 'src/redux';
import { authActions } from './auth.slice';
import { LaravelAuthRepository } from 'src/modules/auth/repositories';
import { isServerErrorResponse } from 'src/helpers/assertions';
import { ServerErrorResponse } from 'src/shared/types';
import { RegisterUserInformation, Token } from '../types';

const laravelAuthRepository = new LaravelAuthRepository();

const setTokenOnCookie = (token: Token) => {
  Cookies.set('token', token, {
    secure: false,
    path: '/',
    expires: 3600 * 9,
    sameSite: 'strict',
  });
};

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

  if (isServerErrorResponse(response)) return response;

  setTokenOnCookie(response.payload);

  dispatch(startLoadingUser());
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

  setTokenOnCookie(response.payload);

  dispatch(startLoadingUser());
};

export const startLogout = (): AppThunk => (dispatch, _getState) => {
  laravelAuthRepository.logout();

  dispatch(authActions.logout());
};

export const startLoadingUser = (): AppThunk<
  Promise<ServerErrorResponse | void>
> => async (dispatch, _getState) => {
  const response = await laravelAuthRepository.userInfo();

  if (isServerErrorResponse(response)) return response;

  dispatch(authActions.login(response.payload));
};

export const startRecoverPassword = (
  email: string
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  _dispatch,
  _getState
) => {
  const response = await laravelAuthRepository.recoverPassword(email);

  if (isServerErrorResponse(response)) return response;
};

export const startResetPassword = (
  newPassword: string,
  token: string
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  _dispatch,
  _getState
) => {
  const response = await laravelAuthRepository.resetPassword(
    newPassword,
    token
  );

  if (isServerErrorResponse(response)) return response;
};
