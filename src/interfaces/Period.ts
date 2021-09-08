import { Timestamps } from '.';

export interface Period extends Timestamps {
  id: number;
  value: string;
  status: string;
  instructorId: number;
}
