import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { useAppSelector } from 'src/redux';

export const GradeTable: React.FC = () => {
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
                  colSpan={activity.scores.length || 1}
                  variant="head"
                  align="center"
                >
                  {activity.name}
                </TableCell>
              ))}

              <TableCell rowSpan={2} variant="head">
                Total
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nombres</TableCell>
              <TableCell>Apellidos</TableCell>
              {activities.map((activity) =>
                activity.scores.map((score) => (
                  <TableCell
                    key={score.id}
                    colSpan={1}
                    variant="head"
                    align="center"
                  >
                    {score.name}
                  </TableCell>
                ))
              )}
              {/* <TableCell>N1</TableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.studentCode}</TableCell>
                <TableCell>{student.firstname}</TableCell>
                <TableCell>{student.lastname}</TableCell>
                {activities.map((activity) =>
                  activity.scores.map((score) => (
                    <TableCell key={score.id} align="center">
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
                  ))
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    </>
  );
};
