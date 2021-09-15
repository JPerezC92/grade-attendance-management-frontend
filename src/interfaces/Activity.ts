import { Score, Timestamps } from '.';

export interface Activity extends Timestamps {
  id: number;
  name: string;
  value: number;
  courseRecordId: number;
  scoresQuantity: number;
  scores: Score[];
}
