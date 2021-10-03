import { Timestamps } from 'src/shared/types';
// import { ScoreAssigned } from './ScoresAssigned';

export interface Score extends Timestamps {
  id: number;
  name: string;
  // scores_assigned: ScoreAssigned[];
  activityId: number;
}
