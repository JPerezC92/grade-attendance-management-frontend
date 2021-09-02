import { RouteList } from './base.routepath';
import { RecordRoute } from './record.routepath';

interface AttendanceRoute extends RouteList {
  ROOT: (recordId: string) => string;
  DATE: (recordId: string, dateId: string) => string;
}

const attendanceRoot = (recordId: string): string =>
  `${RecordRoute.ATTENDANCE(recordId)}`;

export const attendanceRoute: AttendanceRoute = {
  ROOT: attendanceRoot,
  DATE: (recordId, dateId) =>
    `${attendanceRoot(recordId)}/${encodeURIComponent(dateId)}`,
};
