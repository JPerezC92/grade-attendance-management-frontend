import { Timestamps } from 'src/shared/types';

export interface Period extends Timestamps {
  id: number;
  value: string;
  status: string;
  instructorId: number;
}
