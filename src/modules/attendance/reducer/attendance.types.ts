import { AttendanceCheckWithStudentName } from 'src/modules/attendanceCheck/types';
import { NotLoaded } from 'src/shared/types';
import { Attendance, AttendanceStatus } from '../types';

interface CurrentlyCallingAttendanceLoaded {
  isLoaded: true;
  attendancesCheck: AttendanceCheckWithStudentName[];
  attendanceStates: AttendanceStatus[];
}
export interface AttendanceState {
  attendanceStatuses: AttendanceStatus[];
  attendances: Attendance[];
  currentlyCallingAttendance: CurrentlyCallingAttendanceLoaded | NotLoaded;
}

export const attendanceInitialState: AttendanceState = {
  attendances: [],
  attendanceStatuses: [],
  currentlyCallingAttendance: { isLoaded: false },
};
