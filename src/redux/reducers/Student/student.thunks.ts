import { CreateStudent, ServerErrorResponse, Student } from 'src/interfaces';
import { AppThunk } from 'src/redux/store';
import { studentAction } from './student.slice';
import { LaravelStudentRepository } from 'src/repositories';
import { isServerErrorResponse } from 'src/helpers/assertions';
import { courseRecordAction } from 'src/redux';

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
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  const response = await laravelStudentRepository.createFromCSV(formData);

  if (isServerErrorResponse(response)) return response;

  dispatch(studentAction.setStudents(response.payload));
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
