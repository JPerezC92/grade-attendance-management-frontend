import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import React from 'react';
import { useAppSelector } from 'src/redux';

const GradeTable: React.FC = () => {
  const {
    studentReducer: { students },
    activityReducer: { activities },
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
                  rowSpan={activity.scores.length > 1 ? 1 : 0}
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
              <TableCell>Codigo</TableCell>
              <TableCell>Nombres</TableCell>
              <TableCell>Apellidos</TableCell>
              {activities.map((activity) =>
                activity.scores.map((score, index, scores) => (
                  <React.Fragment key={score.id}>
                    {scores.length > 1 && (
                      <TableCell colSpan={1} variant="head" align="center">
                        {score.name}
                      </TableCell>
                    )}

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
              return (
                <React.Fragment key={student.id}>
                  <TableRow>
                    <TableCell>{student.studentCode}</TableCell>
                    <TableCell>{student.firstname}</TableCell>
                    <TableCell>{student.lastname}</TableCell>
                    {/* Notas */}
                    {student.activities.map((activity) => {
                      return activity.scoresAssigned.map(
                        (scoreAssigned, index, scoresAssigned) => (
                          <React.Fragment key={scoreAssigned.id}>
                            <TableCell align="center">
                              {scoreAssigned.value}
                            </TableCell>

                            {scoresAssigned.length - 1 === index &&
                              scoresAssigned.length > 1 && (
                                <TableCell align="center">
                                  {activity.average}
                                </TableCell>
                              )}
                          </React.Fragment>
                        )
                      );
                    })}
                    <TableCell align="center">{student.finalScore}</TableCell>
                    <TableCell align="center">
                      {student.finalScoreRounded}
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

export default GradeTable;
