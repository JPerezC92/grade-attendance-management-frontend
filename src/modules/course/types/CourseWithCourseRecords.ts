import { CourseRecord } from 'src/modules/courseRecord/types';
import { Course } from '.';

export interface CourseWithCourseRecords extends Course {
  course_records: CourseRecord[];
}
