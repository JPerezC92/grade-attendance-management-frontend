import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import React from 'react';
import { useAppSelector } from 'src/redux';

export const GradeTable: React.FC = () => {
  const {
    studentReducer: { students },
    activityReducer: { activities, scoresCalculation },
  } = useAppSelector((state) => state);

  return (
    <>
      <>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell colSpan={3} variant="head" align="center">
                Lista de estudiantes
              </TableCell>

              {activities.map((activity) => (
                <TableCell
                  key={activity.id}
                  colSpan={
                    activity.scores.length > 1
                      ? activity.scores.length + 1
                      : 1 || 1
                  }
                  variant="head"
                  align="center"
                >
                  {activity.name}
                </TableCell>
              ))}

              <TableCell rowSpan={2} variant="head">
                Notal final
              </TableCell>
              <TableCell rowSpan={2} variant="head">
                Redondeo
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nombres</TableCell>
              <TableCell>Apellidos</TableCell>
              {activities.map((activity) =>
                activity.scores.map((score, index, scores) => (
                  <React.Fragment key={score.id}>
                    <TableCell colSpan={1} variant="head" align="center">
                      {score.name}
                    </TableCell>

                    {activity.scores.length > 1 &&
                      scores.length - 1 === index && (
                        <TableCell>Promedio</TableCell>
                      )}
                  </React.Fragment>
                ))
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {students.map((student) => {
              const scoreCalc = scoresCalculation.find(
                (scoreCalc) => scoreCalc.studentId === student.id
              );

              return (
                <React.Fragment key={student.id}>
                  <TableRow>
                    <TableCell>{student.studentCode}</TableCell>
                    <TableCell>{student.firstname}</TableCell>
                    <TableCell>{student.lastname}</TableCell>
                    {/* Notas */}
                    {activities.map((activity) => {
                      return activity.scores.map((score, index, scores) => (
                        <React.Fragment key={score.id}>
                          <TableCell align="center">
                            {score?.scores_assigned.find(
                              (scoreAssigned) =>
                                scoreAssigned.studentId === student.id
                            )?.value
                              ? score.scores_assigned.find(
                                  (scoreAssigned) =>
                                    scoreAssigned.studentId === student.id
                                ).value
                              : 0}
                          </TableCell>

                          {scores.length - 1 === index && scores.length > 1 && (
                            <TableCell align="center">
                              {
                                scoreCalc.activities.find(
                                  (activityCalc) =>
                                    activityCalc.activityId === activity.id
                                ).average
                              }
                            </TableCell>
                          )}
                        </React.Fragment>
                      ));
                    })}
                    <TableCell align="center">{scoreCalc.finalScore}</TableCell>
                    <TableCell align="center">
                      {scoreCalc.finalScoreRounded}
                    </TableCell>
                  </TableRow>
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </>
    </>
  );
};
