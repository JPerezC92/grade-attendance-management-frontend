import { ScoresAssigned } from './ScoresAssigned';

export interface Score {
  id: string;
  name: string;
  scores_assigned: ScoresAssigned[];
  createdAt: string;
}
