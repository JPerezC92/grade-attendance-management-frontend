import { FormikHelpers } from 'formik';
import {
  startLogin,
  startLogout,
  startRegister,
} from 'src/modules/auth/reducer';
import { Credentials, RegisterUserInformation } from 'src/modules/auth/types';
import { useAppDispatch } from 'src/redux';

interface RegisterValues extends RegisterUserInformation {
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
  firstname: 'TestFirstname',
  lastname: 'TestLastname',
  email: 'test2@gmail.com',
  password: '123456aA',
  confirmPassword: '123456aA',
};

const loginInitialValue: Credentials = {
  email: 'test2@gmail.com',
  password: '123456aA',
};

export const useAuthentication: UseAuthentication = () => {
  const dispatch = useAppDispatch();

  const handleLogin = (
    { email, password }: Credentials,
    actions: FormikHelpers<Credentials>
  ) => {
    dispatch(startLogin(email, password)).then((response) => {
      if (response) {
        // eslint-disable-next-line no-console
        console.log(response.message);
        setTimeout(() => actions.resetForm(), 1000);
      }
    });
  };

  const handleRegister = (
    values: RegisterValues,
    actions: FormikHelpers<RegisterValues>
  ) => {
    dispatch(
      startRegister({
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        password: values.password,
      })
    ).then((response) => {
      if (response) {
        // eslint-disable-next-line no-console
        console.log(response.message);

        setTimeout(() => {
          actions.resetForm();
        }, 2000);
      }
    });
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
