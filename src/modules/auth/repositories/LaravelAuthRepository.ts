import Cookies from 'js-cookie';
import { baseApiURL } from 'src/helpers/global';
import {
  Credentials,
  RegisterUserInformation,
  Token,
  User,
} from 'src/modules/auth/types';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';

interface AuthRepository {
  login(
    credentials: Credentials
  ): Promise<SuccessfulResponse<Token> | ServerErrorResponse>;
  register(
    registerUserInformation: RegisterUserInformation
  ): Promise<SuccessfulResponse<Token> | ServerErrorResponse>;
  userInfo(): Promise<SuccessfulResponse<User> | ServerErrorResponse>;

  logout(): Promise<SuccessfulResponse<string> | ServerErrorResponse>;

  recoverPassword(
    email: string
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse>;

  resetPassword(
    newPassword: string,
    token: string
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse>;
}

export class LaravelAuthRepository implements AuthRepository {
  async resetPassword(
    newPassword: string,
    token: string
  ): Promise<SuccessfulResponse<string> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/auth/reset-password`, {
        method: 'POST',
        body: JSON.stringify({ newPassword }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return (await response.json()) as
        | ServerErrorResponse
        | SuccessfulResponse<string>;
    } catch (error) {
      return {
        success: false,
        message: 'Error al recuperar la contraseña',
      };
    }
  }

  async recoverPassword(
    email: string
  ): Promise<ServerErrorResponse | SuccessfulResponse<string>> {
    try {
      const response = await fetch(`${baseApiURL}/auth/recover-password`, {
        method: 'POST',
        body: JSON.stringify({ email }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as
        | ServerErrorResponse
        | SuccessfulResponse<string>;
    } catch (error) {
      return {
        success: false,
        message: 'Error al recuperar la contraseña',
      };
    }
  }
  async userInfo(): Promise<SuccessfulResponse<User> | ServerErrorResponse> {
    try {
      const token = Cookies.get('token');

      const response = await fetch(`${baseApiURL}/instructor`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return (await response.json()) as SuccessfulResponse<User>;
    } catch (error) {
      return {
        success: false,
        message: 'Token invalido',
      };
    }
  }

  async login(
    credentials: Credentials
  ): Promise<SuccessfulResponse<Token> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/auth/login`, {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      return (await response.json()) as SuccessfulResponse<Token>;
    } catch (error) {
      return {
        success: false,
        message: 'Login trouble! Please try again',
      };
    }
  }

  async register(
    registerUserInformation: RegisterUserInformation
  ): Promise<SuccessfulResponse<Token> | ServerErrorResponse> {
    try {
      const responseRegister = await fetch(`${baseApiURL}/auth/register`, {
        method: 'POST',
        body: JSON.stringify(registerUserInformation),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      return (await responseRegister.json()) as SuccessfulResponse<Token>;
    } catch (error) {
      return {
        success: false,
        message: 'Registration trouble! Please try again',
      };
    }
  }

  async logout(): Promise<SuccessfulResponse<string> | ServerErrorResponse> {
    try {
      const token = Cookies.get('token');
      const responseRegister = await fetch(`${baseApiURL}/auth/logout`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      return (await responseRegister.json()) as SuccessfulResponse<string>;
    } catch (error) {
      return {
        success: false,
        message: 'Registration trouble! Please try again',
      };
    } finally {
      Cookies.remove('token');
    }
  }
}
