export interface ScoreCalculation {
  studentId: number;
  finalScore: number;
  finalScoreRounded: number;
  activities: {
    average: number;
    activityId: number;
    value: number;
  }[];
}
