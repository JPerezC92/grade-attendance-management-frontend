import { Draft, PayloadAction } from '@reduxjs/toolkit';
import { Student } from '../types';
import { StudentState } from './student.type';

export const setStudents = (
  state: Draft<StudentState>,
  action: PayloadAction<Student[]>
): void => {
  state.students = [...action.payload];
};

export const addNewStudent = (
  state: Draft<StudentState>,
  action: PayloadAction<Student>
): void => {
  state.students = [...state.students, action.payload];
};

export const updateStudent = (
  state: Draft<StudentState>,
  action: PayloadAction<Student>
): void => {
  state.students = state.students.map((student) =>
    student.id === action.payload.id ? action.payload : student
  );
};

export const deleteStudent = (
  state: Draft<StudentState>,
  action: PayloadAction<Student>
): void => {
  state.students = state.students.filter(
    (student) => student.id !== action.payload.id
  );
};

export const studentSliceOptions = {
  setStudents,
  addNewStudent,
  updateStudent,
  deleteStudent,
};
