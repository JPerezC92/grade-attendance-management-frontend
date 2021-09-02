import { AppRoute } from './app.routepath';
import { RouteList } from './base.routepath';

interface RecordRoute extends RouteList {
  ROOT: (recordId: string) => string;
  GRADE: (recordId: string) => string;
  ACTIVITY: (recordId: string) => string;
  ATTENDANCE: (recordId: string) => string;
  ATTENDANCE_DATE: (recordId: string) => string;
  STUDENT: (recordId: string) => string;
}

const recordRoot = `${AppRoute.ROOT}/record`;

export const RecordRoute: RecordRoute = {
  ROOT: (recordId) => `${recordRoot}/${encodeURIComponent(recordId)}`,
  GRADE: (recordId) => `${recordRoot}/${encodeURIComponent(recordId)}/grade`,
  ATTENDANCE: (recordId) =>
    `${recordRoot}/${encodeURIComponent(recordId)}/attendance`,
  ATTENDANCE_DATE: (recordId) =>
    `${recordRoot}/${encodeURIComponent(recordId)}/attendance-date`,
  STUDENT: (recordId) =>
    `${recordRoot}/${encodeURIComponent(recordId)}/student`,
  ACTIVITY: (recordId) =>
    `${recordRoot}/${encodeURIComponent(recordId)}/activity`,
};
