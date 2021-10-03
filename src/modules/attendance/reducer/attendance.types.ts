import { Attendance, AttendanceStatus, AttendanceCheck } from '../types';

export interface AttendanceState {
  attendanceStatuses: AttendanceStatus[];
  attendances: Attendance[];
  currentCheckAttendances: AttendanceCheck[] | null;
}

export const attendanceInitialState: AttendanceState = {
  attendances: [],
  attendanceStatuses: [],
  currentCheckAttendances: null,
};
