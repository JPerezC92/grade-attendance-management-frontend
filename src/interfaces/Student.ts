import { Person } from '.';

export interface Student extends Person {
  id: number;
  studentCode: string;
}
