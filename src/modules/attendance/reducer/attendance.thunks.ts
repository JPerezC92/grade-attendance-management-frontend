import { AppThunk } from 'src/redux/store';
import { attendanceAction } from './attendance.slice';
import { ServerErrorResponse } from 'src/shared/types';
import { isServerErrorResponse } from 'src/helpers/assertions';

import { Attendance, AttendanceCheck, CreateAttendance } from '../types';
import { LaravelAttendanceRepository } from '../repositories';
import { LaravelAttendanceCheckRepository } from 'src/modules/attendanceCheck/repositories';
import { startLoadingCourseRecord } from 'src/modules/courseRecord/reducer/thunks';

const laravelAttendanceRepository = new LaravelAttendanceRepository();
const laravelAttendanceCheckRepository = new LaravelAttendanceCheckRepository();

export const startCreateAttendance = (
  createAttendance: CreateAttendance
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const { currentCourseRecord } = getState().courseRecordReducer;
  const response = await laravelAttendanceRepository.create(createAttendance);

  if (isServerErrorResponse(response)) return response;

  dispatch(attendanceAction.addNewAttendance(response.payload));
  if (currentCourseRecord.isLoaded) {
    dispatch(startLoadingCourseRecord(currentCourseRecord.id));
  }
};

export const startUpdateAttendance = (
  attendance: Attendance
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const { currentCourseRecord } = getState().courseRecordReducer;
  const response = await laravelAttendanceRepository.update(attendance);

  if (isServerErrorResponse(response)) return response;

  if (currentCourseRecord.isLoaded) {
    dispatch(startLoadingCourseRecord(currentCourseRecord.id));
  }
};

export const startDeleteAttendance = (
  attendance: Attendance
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const { currentCourseRecord } = getState().courseRecordReducer;
  const response = await laravelAttendanceRepository.delete(attendance.id);

  if (isServerErrorResponse(response)) return response;
  if (currentCourseRecord.isLoaded) {
    dispatch(startLoadingCourseRecord(currentCourseRecord.id));
  }
};

export const startLoadingCurrentlyCallingAttendance = (
  attendanceId: number
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  const response = await laravelAttendanceCheckRepository.getByAttendanceId(
    attendanceId
  );

  if (isServerErrorResponse(response)) return response;

  dispatch(attendanceAction.setCurrentlyCallingAttendance(response.payload));
};

export const startUpdateAttendanceCheck = (
  attendancesCheck: AttendanceCheck[]
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const { currentCourseRecord } = getState().courseRecordReducer;

  const response = await laravelAttendanceCheckRepository.updateMany(
    attendancesCheck
  );

  if (isServerErrorResponse(response)) return response;

  if (currentCourseRecord.isLoaded) {
    dispatch(startLoadingCourseRecord(currentCourseRecord.id));
  }
};
