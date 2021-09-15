import { CreateStudent } from 'src/modules/student/types';

export interface Student extends CreateStudent {
  id: number;
}
