import { Attendance, AttendanceStatus, CheckAttendance } from '../types';

export interface AttendanceState {
  attendanceStatuses: AttendanceStatus[];
  attendances: Attendance[];
  currentCheckAttendances: CheckAttendance[] | null;
}

export const attendanceInitialState: AttendanceState = {
  attendances: [],
  attendanceStatuses: [],
  currentCheckAttendances: null,
};
