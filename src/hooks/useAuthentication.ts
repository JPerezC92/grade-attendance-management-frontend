import { FormikHelpers } from 'formik';
import { useAppDispatch } from 'src/redux';
import { startLogin, startLogout } from 'src/redux/reducers';

interface Credentials {
  email: string;
  password: string;
}

interface RegisterValues {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface UseAuthentication {
  (): {
    handleLogin: (
      credentials: Credentials,
      actions: FormikHelpers<Credentials>
    ) => void;
    handleRegister: (
      values: RegisterValues,
      actions: FormikHelpers<RegisterValues>
    ) => void;
    handleLogout: () => void;
    loginInitialValue: Credentials;
    registerInitialValue: RegisterValues;
  };
}

const registerInitialValue: RegisterValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const loginInitialValue: Credentials = {
  email: 'test@gmail.com',
  password: '123456aA',
};

export const useAuthentication: UseAuthentication = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (
    { email, password }: Credentials,
    actions: FormikHelpers<Credentials>
  ) => {
    const { success } = dispatch(startLogin(email, password));

    if (!success) actions.resetForm();
  };

  const handleRegister = (
    values: RegisterValues,
    actions: FormikHelpers<RegisterValues>
  ) => {
    // eslint-disable-next-line no-console
    console.log(values, actions);
  };

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return {
    handleLogin,
    handleRegister,
    handleLogout,
    loginInitialValue,
    registerInitialValue,
  };
};
