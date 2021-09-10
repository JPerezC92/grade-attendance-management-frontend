import { Person } from '.';

export interface CreateStudent extends Person {
  courseRecordId: number;
  studentCode: string;
}
