import { Student } from './Student';

type payload<Type> = Type;
type message = string;
export interface ApiResponse {
  success: boolean;
}
export interface SuccessfulResponse<Type = void> extends ApiResponse {
  success: true;
  payload: payload<Type>;
}

export interface ServerErrorResponse {
  success: false;
  message: message;
}

export interface User extends Person {
  id: number;
  email: string;
  rootFolderId: string;
}

export interface RegisterUserInformation extends Person {
  email: string;
  password: string;
}

export interface Credentials {
  email: string;
  password: string;
}

export interface Person {
  firstname: string;
  lastname: string;
}

export type RegisterStudentInformation = Omit<Student, 'id'>;

export interface AttendanceSummary {
  A: number;
  T: number;
  I: number;
  percentage: number;
}

export interface CheckAttendance {
  id: string;
  attendanceId: string;
  studentId: string;
  statusValue: string;
  statusId: string;
}

export interface AttendanceStatus {
  id: string;
  value: string;
}
