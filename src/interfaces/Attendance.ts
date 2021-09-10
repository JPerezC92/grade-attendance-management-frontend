import { CheckAttendance, CreateAttendance, Timestamps } from '.';

export interface Attendance extends CreateAttendance, Timestamps {
  id: number;

  attendance_checks: CheckAttendance[];
}
