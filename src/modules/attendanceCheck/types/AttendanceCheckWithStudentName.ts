import { AttendanceCheck } from 'src/modules/attendance/types';
import { Person } from 'src/shared/types';

export type AttendanceCheckWithStudentName = AttendanceCheck & Person;
