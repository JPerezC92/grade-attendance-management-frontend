import {
  Attendance,
  CreateAttendance,
  ServerErrorResponse,
} from 'src/interfaces';
import { AppThunk } from 'src/redux/store';
import { attendanceAction } from './attendance.slice';
import { LaravelAttendanceRepository } from 'src/repositories';
import { isServerErrorResponse } from 'src/helpers/assertions';

const laravelAttendanceRepository = new LaravelAttendanceRepository();

export const startCreateAttendance = (
  createAttendance: CreateAttendance
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  const response = await laravelAttendanceRepository.create(createAttendance);

  if (isServerErrorResponse(response)) return response;

  dispatch(attendanceAction.addNewAttendance(response.payload));
};

export const startUpdateAttendance = (
  attendance: Attendance
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  const response = await laravelAttendanceRepository.update(attendance);

  if (isServerErrorResponse(response)) return response;

  dispatch(attendanceAction.updateAttendance(response.payload));
};

export const startDeleteAttendance = (
  attendance: Attendance
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  const response = await laravelAttendanceRepository.delete(attendance.id);

  if (isServerErrorResponse(response)) return response;

  dispatch(attendanceAction.deleteAttendance(attendance));
};
