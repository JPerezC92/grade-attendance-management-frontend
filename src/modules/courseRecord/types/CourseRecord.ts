import { Period } from 'src/modules/period/types';
import { CourseRecordRegister } from './CourseRecordRegister';

export interface CourseRecord extends CourseRecordRegister {
  id: number;
  created_at: string;
  updated_at: string;
  period: Period;
}
