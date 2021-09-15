import { Timestamps } from 'src/shared/types';
import {
  CheckAttendance,
  CreateAttendance,
} from 'src/modules/attendance/types';

export interface Attendance extends CreateAttendance, Timestamps {
  id: number;
  attendance_checks: CheckAttendance[];
}
