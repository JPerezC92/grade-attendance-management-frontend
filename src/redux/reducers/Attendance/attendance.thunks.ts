import { v4 as uuidv4 } from 'uuid';
import { Attendance, ServerErrorResponse } from 'src/interfaces';
import { AppThunk } from 'src/redux/store';
import { attendanceAction } from './attendance.slice';

export const startCreateAttendance = (
  attendanceDate: string
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  // const { currentFile } = getState().fileSystemReducer;
  // dispatch(
  //   attendanceAction.addNewAttendance({
  //     id: uuidv4(),
  //     gradeId: currentFile.id,
  //     checkAttendances: [],
  //     date: attendanceDate,
  //   })
  // );
};

export const startUpdateAttendance = (
  attendance: Attendance
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  dispatch(attendanceAction.updateAttendance(attendance));
};

export const startDeleteAttendance = (
  attendance: Attendance
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  dispatch(attendanceAction.deleteAttendance(attendance));
};
