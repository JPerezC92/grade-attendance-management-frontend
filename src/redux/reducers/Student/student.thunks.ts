import { v4 as uuidv4 } from 'uuid';
import {
  RegisterStudentInformation,
  ServerErrorResponse,
  Student,
} from 'src/interfaces';
import { AppThunk } from 'src/redux/store';
import { studentAction } from './student.slice';
import { parseCSV } from 'src/helpers/parseCSV';

export const startCreateStudent = (
  studentInformation: RegisterStudentInformation
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  dispatch(
    studentAction.addNewStudent({ ...studentInformation, id: uuidv4() })
  );
};

export const startCreateStudentFromCSV = (
  file: File
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  const { students } = await parseCSV(file);
  dispatch(
    studentAction.setStudents(
      students.map((student) => ({ ...student, id: uuidv4() }))
    )
  );
};

export const startUpdateStudent = (
  student: Student
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  dispatch(studentAction.updateStudent(student));
};

export const startDeleteStudent = (
  student: Student
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  dispatch(studentAction.deleteStudent(student));
};
