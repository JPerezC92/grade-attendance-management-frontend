import { Person } from 'src/shared/types';
import { ScoreAssigned } from '.';

export type ScoreAssignedWithStudentName = ScoreAssigned & Person;
