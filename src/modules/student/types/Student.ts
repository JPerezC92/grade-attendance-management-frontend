import { Activity } from 'src/modules/activity/types';
import { AttendanceCheck } from 'src/modules/attendance/types';
import { ScoreAssigned } from 'src/modules/grade/types';
import { CreateStudent } from 'src/modules/student/types';

export interface Student extends CreateStudent {
  id: number;
  attendances: {
    attendancesCheck: AttendanceCheck[];
    attended: number;
    late: number;
    skip: number;
    attendedAverage: number;
  };
  activities: (Omit<Activity, 'scores'> & {
    average: number;
    scoresQuantity: number;
    scoresAssigned: ScoreAssigned[];
  })[];
  finalScore: number;
  finalScoreRounded: number;
}
