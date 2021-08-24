import { AppThunk } from 'src/redux/store/store';
import { authActions } from './auth.slice';

export const startLogin = (
  email: string,
  password: string
): AppThunk<{ success: boolean; message: string }> => (dispatch, _getState) => {
  // eslint-disable-next-line no-console
  console.log(email, password, 'startLogin');
  dispatch(
    authActions.login({
      id: 'JKSDWESD',
      email: 'test@example.com',
      displayName: 'TEST',
    })
  );
  return { success: true, message: 'Login successful' };
};

export const startLogout = (): AppThunk => (dispatch, _getState) => {
  dispatch(authActions.logout());
};
