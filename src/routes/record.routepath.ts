import { AppRoute } from './app.routepath';
import { RouteList } from './base.routepath';

interface RecordRoute extends RouteList {
  ROOT: (recordId: string) => string;
  GRADE: (recordId: string) => string;
  ACTIVITY: (recordId: string) => string;
  ATTENDANCE: (recordId: string) => string;
  STUDENT: (recordId: string) => string;
}

const recordRoot = `${AppRoute.ROOT}/record`;

export const RecordRoute: RecordRoute = {
  ROOT: (recordId) => `${recordRoot}/${recordId}`,
  GRADE: (recordId) => `${recordRoot}/${recordId}/grade`,
  ATTENDANCE: (recordId) => `${recordRoot}/${recordId}/attendance`,
  STUDENT: (recordId) => `${recordRoot}/${recordId}/student`,
  ACTIVITY: (recordId) => `${recordRoot}/${recordId}/activity`,
};
