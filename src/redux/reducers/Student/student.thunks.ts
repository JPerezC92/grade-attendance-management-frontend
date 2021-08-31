import { v4 as uuidv4 } from 'uuid';
import {
  RegisterStudentInformation,
  ServerErrorResponse,
  Student,
} from 'src/interfaces';
import { AppThunk } from 'src/redux/store';
import { studentAction } from './student.slice';

export const startCreateStudent = (
  studentInformation: RegisterStudentInformation
): AppThunk<Promise<ServerErrorResponse | void>> => async (dispatch, _) => {
  dispatch(
    studentAction.addNewStudent({ ...studentInformation, id: uuidv4() })
  );
};

export const startCreateStudentFromCSV = (): AppThunk<
  Promise<ServerErrorResponse | void>
> => async (dispatch, _) => {
  dispatch(
    studentAction.setStudents([
      {
        id: uuidv4(),
        firstname: 'Create From CSV',
        lastname: 'Create From CSV',
        studentId: 'Create From CSV',
      },
    ])
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
