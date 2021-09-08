import { CourseRecordRegister } from './CourseRecordRegister';
import { Period } from './Period';

export interface CourseRecord extends CourseRecordRegister {
  id: number;
  created_at: string;
  updated_at: string;
  period: Period;
}
