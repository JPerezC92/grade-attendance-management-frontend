import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';
import { students } from 'src/helpers/gradeMock';

export const GradeTable: React.FC = () => {
  return (
    <>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell colSpan={3} variant="head" />
            <TableCell colSpan={3} align="center">
              Foro
            </TableCell>
            <TableCell colSpan={3} align="center">
              Foro
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Nombres</TableCell>
            <TableCell>Apellidos</TableCell>
            <TableCell>Nota1</TableCell>
            <TableCell>Nota2</TableCell>
            <TableCell>Nota3</TableCell>
            <TableCell>Nota1</TableCell>
            <TableCell>Nota2</TableCell>
            <TableCell>Nota3</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {students.map((student) => (
            <TableRow key={student.studentId}>
              <TableCell>{student.studentId}</TableCell>
              <TableCell>{student.firstname}</TableCell>
              <TableCell>{student.lastname}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};
