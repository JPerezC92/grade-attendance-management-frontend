import { Activity } from 'src/modules/activity/types';
import { NotLoaded } from 'src/shared/types';
import { Score, ScoreAssigned } from '../types';

interface CurrentlyGradingLoaded {
  isLoaded: true;
  scoresAssigned: ScoreAssigned[];
  score: Score;
  activity: Activity;
}

interface GradeState {
  currentlyGrading: CurrentlyGradingLoaded | NotLoaded;
}

export const gradeInitialState: GradeState = {
  currentlyGrading: { isLoaded: false },
};
