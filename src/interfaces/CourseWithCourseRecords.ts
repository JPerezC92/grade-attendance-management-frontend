import { Course } from '.';
import { CourseRecord } from './CourseRecord';

export interface CourseWithCourseRecords extends Course {
  course_records: CourseRecord[];
}
