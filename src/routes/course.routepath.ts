import { AppRoute } from './app.routepath';
import { RouteList } from './base.routepath';

interface CourseRoute extends RouteList {
  ROOT: string;
  COURSE: (courseId: number) => string;
}

const courseRoot = `${AppRoute.ROOT}/course`;

export const CourseRoute: CourseRoute = {
  ROOT: courseRoot,
  COURSE: (courseId) => `${courseRoot}/${encodeURIComponent(courseId)}`,
};
