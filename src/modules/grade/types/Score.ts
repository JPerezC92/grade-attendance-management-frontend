import { Timestamps } from 'src/shared/types';
import { ScoresAssigned } from './ScoresAssigned';

export interface Score extends Timestamps {
  id: number;
  name: string;
  scores_assigned: ScoresAssigned[];
  activityId: number;
}
