import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { AttendanceCheckWithStudentName } from 'src/modules/attendanceCheck/types';
import { Attendance, AttendanceStatus } from '../types';
import { AttendanceState } from './attendance.types';

const setAttendances = (
  state: Draft<AttendanceState>,
  action: PayloadAction<Attendance[]>
): void => {
  state.attendances = action.payload;
};

const addNewAttendance = (
  state: Draft<AttendanceState>,
  action: PayloadAction<Attendance>
): void => {
  state.attendances = [...state.attendances, action.payload];
};

const updateAttendance = (
  state: Draft<AttendanceState>,
  action: PayloadAction<Attendance>
): void => {
  state.attendances = state.attendances.map((attendance) =>
    attendance.id === action.payload.id ? action.payload : attendance
  );
};

const deleteAttendance = (
  state: Draft<AttendanceState>,
  action: PayloadAction<Attendance>
): void => {
  state.attendances = state.attendances.filter(
    (attendance) => attendance.id !== action.payload.id
  );
};

const setCurrentlyCallingAttendance = (
  state: Draft<AttendanceState>,
  action: PayloadAction<{
    attendancesCheck: AttendanceCheckWithStudentName[];
    attendanceStates: AttendanceStatus[];
  }>
): void => {
  state.currentlyCallingAttendance = {
    isLoaded: true,
    attendancesCheck: action.payload.attendancesCheck,
    attendanceStates: action.payload.attendanceStates,
  };
};

export const attendanceSliceOptions = {
  setAttendances,
  updateAttendance,
  deleteAttendance,
  addNewAttendance,
  setCurrentlyCallingAttendance,
};
