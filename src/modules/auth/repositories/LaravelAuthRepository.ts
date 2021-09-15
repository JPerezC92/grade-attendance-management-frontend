import Cookies from 'js-cookie';
import { baseApiURL } from 'src/helpers/global';
import {
  Credentials,
  RegisterUserInformation,
  User,
} from 'src/modules/auth/types';
import { ServerErrorResponse, SuccessfulResponse } from 'src/shared/types';

interface AuthRepository {
  login(
    credentials: Credentials
  ): Promise<SuccessfulResponse<User> | ServerErrorResponse>;
  register(
    registerUserInformation: RegisterUserInformation
  ): Promise<SuccessfulResponse<User> | ServerErrorResponse>;
  userInfo(
    token: string
  ): Promise<SuccessfulResponse<User> | ServerErrorResponse>;

  logout(): Promise<void>;
}

export class LaravelAuthRepository implements AuthRepository {
  async userInfo(
    token: string
  ): Promise<SuccessfulResponse<User> | ServerErrorResponse> {
    try {
      const response = await fetch(`${baseApiURL}/instructor/infouser`, {
        method: 'POST',
        headers: {
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
  ): Promise<SuccessfulResponse<User> | ServerErrorResponse> {
    if (
      credentials.email === 'test@gmail.com' &&
      credentials.password == '123456aA'
    ) {
      return {
        success: true,
        payload: {
          id: 1,
          firstname: 'TestFirstname',
          lastname: 'TestLastname',
          email: 'test@test.com',
        },
      };
    }

    return {
      success: false,
      message: 'Login trouble! Please try again',
    };
  }

  async register(
    registerUserInformation: RegisterUserInformation
  ): Promise<SuccessfulResponse<User> | ServerErrorResponse> {
    // if (
    //   registerUserInformation.firstname === 'TestFirstname' &&
    //   registerUserInformation.lastname === 'TestLastname' &&
    //   registerUserInformation.email === 'test@gmail.com' &&
    //   registerUserInformation.password === '123456aA'
    // ) {
    //   return {
    //     success: true,
    //     payload: {
    //       id: 1,
    //       firstname: 'TestFirsname',
    //       lastname: 'TestLastname',
    //       email: 'test@test.com',
    //       rootFolderId: '8e0a6672-2d85-4ff0-b944-a15b56eabc13',
    //     },
    //   };
    // }

    try {
      const responseRegister = await fetch(
        `${baseApiURL}/instructor/register`,
        {
          method: 'POST',
          body: JSON.stringify(registerUserInformation),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const {
        payload: token,
      } = (await responseRegister.json()) as SuccessfulResponse<string>;

      Cookies.set('token', token, {
        secure: false,
        path: '/',
        expires: 3600 * 9,
        sameSite: 'strict',
      });

      const response = await this.userInfo(token);
      return response;
    } catch (error) {
      return {
        success: false,
        message: 'Registration trouble! Please try again',
      };
    }
  }

  async logout(): Promise<void> {
    // eslint-disable-next-line no-console
    console.log('logout');
  }
}
