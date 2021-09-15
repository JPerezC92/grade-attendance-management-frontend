import { AppThunk } from 'src/redux/store';
import { attendanceAction } from './attendance.slice';
import { ServerErrorResponse } from 'src/shared/types';
import { isServerErrorResponse } from 'src/helpers/assertions';

import { Attendance, CreateAttendance } from '../types';
import { LaravelAttendanceRepository } from '../repositories';

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
