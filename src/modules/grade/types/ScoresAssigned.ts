import { Timestamps } from 'src/shared/types';

export interface ScoreAssigned extends Timestamps {
  id: number;
  value: number;
  scoreId: number;
  studentId: number;
  activityId: number;
}
