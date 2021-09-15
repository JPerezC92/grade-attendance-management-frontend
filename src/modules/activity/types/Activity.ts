import { Score } from 'src/modules/grade/types';
import { Timestamps } from 'src/shared/types';

export interface Activity extends Timestamps {
  id: number;
  name: string;
  value: number;
  courseRecordId: number;
  scoresQuantity: number;
  scores: Score[];
}
