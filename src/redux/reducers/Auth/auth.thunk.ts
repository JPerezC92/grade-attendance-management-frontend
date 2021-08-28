import { AppThunk } from 'src/redux/store/store';
import { authActions } from './auth.slice';
import { LaravelAuthRepository } from 'src/repositories/LaravelAuthRepository';
import { isServerErrorResponse } from 'src/helpers/assertions';
import {
  RegisterUserInformation,
  ServerErrorResponse,
} from 'src/interfaces/Folder';

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
