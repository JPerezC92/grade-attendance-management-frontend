import {
  Credentials,
  User,
  RegisterUserInformation,
  SuccessfulResponse,
  ServerErrorResponse,
} from 'src/interfaces/Folder';

interface AuthRepository {
  login(
    credentials: Credentials
  ): Promise<SuccessfulResponse<User> | ServerErrorResponse>;
  register(
    registerUserInformation: RegisterUserInformation
  ): Promise<SuccessfulResponse<User> | ServerErrorResponse>;
  logout(): Promise<void>;
}

export class LaravelAuthRepository implements AuthRepository {
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
          id: 'ef6d8e51-f047-4ed9-a274-98b746a52ab6',
          firstname: 'TestFirstname',
          lastname: 'TestLastname',
          email: 'test@test.com',
          rootFolderId: '8e0a6672-2d85-4ff0-b944-a15b56eabc13',
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
    if (
      registerUserInformation.firstname === 'TestFirstname' &&
      registerUserInformation.lastname === 'TestLastname' &&
      registerUserInformation.email === 'test@gmail.com' &&
      registerUserInformation.password === '123456aA'
    ) {
      return {
        success: true,
        payload: {
          id: 'ef6d8e51-f047-4ed9-a274-98b746a52ab6',
          firstname: 'TestFirsname',
          lastname: 'TestLastname',
          email: 'test@test.com',
          rootFolderId: '8e0a6672-2d85-4ff0-b944-a15b56eabc13',
        },
      };
    }

    return {
      success: false,
      message: 'Registration trouble! Please try again',
    };
  }

  async logout(): Promise<void> {
    // eslint-disable-next-line no-console
    console.log('logout');
  }
}
