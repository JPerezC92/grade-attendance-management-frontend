import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { useAppSelector } from 'src/redux';
import { GradeTableAssignedScoreCell } from './GradeTableAssignedScoreCell';

export const GradeTable: React.FC = () => {
  const { students } = useAppSelector((state) => state.studentReducer);

  return (
    <>
      <>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell colSpan={3} variant="head" align="center">
                Lista de estudiantes
              </TableCell>
              <TableCell colSpan={4} variant="head" align="center">
                Foro
              </TableCell>
              <TableCell colSpan={3} variant="head" align="center">
                Foro
              </TableCell>
              <TableCell rowSpan={2} variant="head">
                Total
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nombres</TableCell>
              <TableCell>Apellidos</TableCell>
              <TableCell>N1</TableCell>
              <TableCell>N2</TableCell>
              <TableCell>N3</TableCell>
              <TableCell>Promedio</TableCell>
              <TableCell>Nota1</TableCell>
              <TableCell>Nota2</TableCell>
              <TableCell>Nota3</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.studentId}</TableCell>
                <TableCell>{student.firstname}</TableCell>
                <TableCell>{student.lastname}</TableCell>
                <GradeTableAssignedScoreCell studentId={student.studentId} />
                <GradeTableAssignedScoreCell studentId={student.studentId} />
                <GradeTableAssignedScoreCell studentId={student.studentId} />
                <TableCell>Prom</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    </>
  );
};
