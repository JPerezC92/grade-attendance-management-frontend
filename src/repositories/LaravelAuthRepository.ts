import {
  Credentials,
  User,
  RegisterUserInformation,
  SuccessfulResponse,
} from 'src/interfaces/Folder';

interface AuthRepository {
  login(credentials: Credentials): Promise<SuccessfulResponse<User>>;
  register(
    registerUserInformation: RegisterUserInformation
  ): Promise<SuccessfulResponse<User>>;
}

export class LaravelAuthRepository implements AuthRepository {
  async login(credentials: Credentials): Promise<SuccessfulResponse<User>> {
    if (credentials) {
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
  }

  async register(
    registerUserInformation: RegisterUserInformation
  ): Promise<SuccessfulResponse<User>> {
    if (registerUserInformation) {
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
  }
}
