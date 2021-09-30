import { Person, Timestamps } from 'src/shared/types';

export interface ScoreAssigned extends Person, Timestamps {
  id: number;
  value: number;
  scoreId: number;
  studentId: number;
  activityId: number;
}
