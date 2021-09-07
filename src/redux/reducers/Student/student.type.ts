import { Student } from 'src/interfaces';

export interface StudentState {
  students: Student[];
  currentStudent: Student | null;
}

export const studentInitialState: StudentState = {
  students: [],
  currentStudent: null,
};
