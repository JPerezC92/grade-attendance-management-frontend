import { Timestamps } from 'src/shared/types';
import {
  // AttendanceCheck,
  CreateAttendance,
} from 'src/modules/attendance/types';

export interface Attendance extends CreateAttendance, Timestamps {
  id: number;
  type: 'Teoria' | 'Practica';
}
