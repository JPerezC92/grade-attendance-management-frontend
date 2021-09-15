import { Person } from 'src/shared/types';

export interface User extends Person {
  id: number;
  email: string;
}
