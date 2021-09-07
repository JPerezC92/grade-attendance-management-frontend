import { RouteList } from './base.routepath';
import { CourseRoute } from './course.routepath';

interface CourseRecordRoute extends RouteList {
  ROOT: (courseId: number, courseRecordId: number) => string;
}

const courseRecordRoot = (courseId: number, courseRecordId: number): string =>
  `${CourseRoute.COURSE(courseId)}/course-record/${courseRecordId}/grade`;

export const CourseRecordRoute: CourseRecordRoute = {
  ROOT: courseRecordRoot,
  // ROOT: courseRecordRoot,
};
