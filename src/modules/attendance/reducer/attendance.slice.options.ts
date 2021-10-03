import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { Attendance, AttendanceCheck } from '../types';
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

const setCurrentCheckAttendances = (
  state: Draft<AttendanceState>,
  action: PayloadAction<AttendanceCheck[]>
): void => {
  state.currentCheckAttendances = action.payload;
};

export const attendanceSliceOptions = {
  setAttendances,
  updateAttendance,
  deleteAttendance,
  addNewAttendance,
  setCurrentCheckAttendances,
};
