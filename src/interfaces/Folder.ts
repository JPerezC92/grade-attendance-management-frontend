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

export interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  rootFolderId: string;
}

export interface RegisterUserInformation {
  firstname: string;
  lastname: string;
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

export interface Student {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  rootFolder: Folder;
}

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
  date: string;
  gradeId: string;
  checkAttendances: CheckAttendance[];
}

export interface CheckAttendance {
  id: string;
  attendanceId: string;
  studentId: string;
  statusId;
}
