import { Person } from 'src/shared/types';

export interface RegisterUserInformation extends Person {
  email: string;
  password: string;
}
