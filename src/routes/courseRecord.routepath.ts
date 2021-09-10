import { RouteList } from './base.routepath';
import { CourseRoute } from './course.routepath';

interface CourseRecordRoute extends RouteList {
  GRADE: (courseId: number, courseRecordId: number) => string;
  ATTENDANCE: (courseId: number, courseRecordId: number) => string;
  SETTINGS: (courseId: number, courseRecordId: number) => string;
}

const courseRecordRoot = (courseId: number, courseRecordId: number): string =>
  `${CourseRoute.COURSE(courseId)}/course-record/${courseRecordId}`;

export const CourseRecordRoute: CourseRecordRoute = {
  GRADE: (courseId: number, courseRecordId: number) =>
    `${courseRecordRoot(courseId, courseRecordId)}/grade`,
  ATTENDANCE: (courseId: number, courseRecordId: number): string =>
    `${courseRecordRoot(courseId, courseRecordId)}/attendance`,
  SETTINGS: (courseId: number, courseRecordId: number): string =>
    `${courseRecordRoot(courseId, courseRecordId)}/settings`,
};
