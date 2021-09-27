import { AppThunk } from 'src/redux/store';

import {
  isCurrentCourseRecordLoaded,
  isServerErrorResponse,
} from 'src/helpers/assertions';
import { courseRecordAction } from 'src/modules/courseRecord/reducer';
import { studentAction } from './student.slice';
import { startLoadingCourseRecord } from 'src/modules/courseRecord/reducer/thunks';
import { ServerErrorResponse } from 'src/shared/types';
import { CreateStudent, Student } from '../types';
import { LaravelStudentRepository } from '../repositories';

const laravelStudentRepository = new LaravelStudentRepository();

export const startCreateStudent = (
  createStudent: CreateStudent
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  dispatch(courseRecordAction.startLoading());

  const response = await laravelStudentRepository.create(createStudent);

  dispatch(courseRecordAction.finishLoading());
  if (isServerErrorResponse(response)) return response;

  dispatch(studentAction.addNewStudent(response.payload));
};

export const startCreateStudentFromCSV = (
  formData: FormData
): AppThunk<Promise<ServerErrorResponse | void>> => async (
  dispatch,
  getState
) => {
  const {
    courseRecordReducer: { currentCourseRecord },
  } = getState();

  const response = await laravelStudentRepository.createFromCSV(formData);

  if (isServerErrorResponse(response)) return response;

  if (isCurrentCourseRecordLoaded(currentCourseRecord)) {
    dispatch(startLoadingCourseRecord(currentCourseRecord.id));
  }
};

export const startUpdateStudent = (
  student: Student
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  dispatch(courseRecordAction.startLoading());
  const response = await laravelStudentRepository.update(student);
  dispatch(courseRecordAction.finishLoading());

  if (isServerErrorResponse(response)) return response;

  dispatch(studentAction.updateStudent(response.payload));
};

export const startDeleteStudent = (
  student: Student
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  dispatch(courseRecordAction.startLoading());
  const response = await laravelStudentRepository.delete(student.id);
  dispatch(courseRecordAction.finishLoading());

  if (isServerErrorResponse(response)) return response;

  dispatch(studentAction.deleteStudent(student));
};
