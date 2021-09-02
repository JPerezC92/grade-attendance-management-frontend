import { ObjectType } from 'src/redux/reducers';

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
  id: string;
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

export interface FolderDetail {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  objectType: ObjectType.FOLDER;
}

export interface Folder extends FolderDetail {
  mpath: string;
  folders: FolderDetail[];
  record: FileRecordDetail[];
}

export interface FileRecordDetail {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  objectType: ObjectType.FILE;
}

export interface FileRecord extends FileRecordDetail {
  detail: Record<string, string>;
  userId: string;
  folderId: string;
  students: Student[];
  activities: Activity[];
  attendances: Attendance[];
}
interface Person {
  firstname: string;
  lastname: string;
}
export interface Student extends Person {
  id: string;
  studentId: string;
}

export type RegisterStudentInformation = Omit<Student, 'id'>;

export interface Activity {
  id: string;
  name: string;
  value: number;
  scores: Score[];
}

export interface Score {
  id: string;
  name: string;
  assignedScore: AssignedScore[];
  createdAt: string;
}

export interface AssignedScore {
  id: string;
  value: number;
  scoreId: number;
  studentId: number;
}

export interface Attendance {
  id: string;
  date: string;
  gradeId: string;
  checkAttendances: CheckAttendance[];
}

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
