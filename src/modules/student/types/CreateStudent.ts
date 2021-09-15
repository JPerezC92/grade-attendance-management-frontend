import { Person } from 'src/shared/types';

export interface CreateStudent extends Person {
  courseRecordId: number;
  studentCode: string;
}
