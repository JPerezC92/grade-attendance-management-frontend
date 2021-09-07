import { CheckAttendance } from '.';
import { Timestamps } from '.';

export interface Attendance extends Timestamps {
  id: string;
  date: string;
  courseRecordId: number;
  attendance_checks: CheckAttendance[];
}
