import { Period } from './Period';

export interface CourseRecord {
  id: number;
  career: string;
  turn: string;
  group: string;
  created_at: string;
  updated_at: string;
  instructorId: number;
  courseId: number;
  periodId: number;
  period: Period;
}
