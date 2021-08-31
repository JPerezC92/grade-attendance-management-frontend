import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Button,
} from '@material-ui/core';
import React from 'react';
import { RecordLayout } from 'src/components/modules';
import { useAppSelector } from 'src/redux';
import styles from './RecordAttendanceContainer.module.scss';

export const RecordAttendanceContainer: React.FC = () => {
  const { students } = useAppSelector((state) => state.studentReducer);

  return (
    <>
      <RecordLayout>
        <div className={styles.recordAttendance__content}>
          <Typography className={styles.title} component="h1" variant="h3">
            Asistencias
          </Typography>

          <div className={styles.recordAttendance__buttons}>
            <Button variant="contained" color="primary">
              Agregar Fecha
            </Button>
          </div>

          <Paper>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    Lista de Estudiantes
                  </TableCell>
                  <TableCell colSpan={2} align="center">
                    Fechas
                  </TableCell>
                  <TableCell colSpan={4} align="center">
                    Resumen
                  </TableCell>
                  <TableCell rowSpan={2} align="center">
                    % Asistencias
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Apellidos</TableCell>
                  <TableCell>Nombres</TableCell>
                  <TableCell>27/02/2021</TableCell>
                  <TableCell>Fecha</TableCell>

                  <TableCell>A</TableCell>
                  <TableCell>T</TableCell>
                  <TableCell>I</TableCell>
                  <TableCell>J</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.studentId}</TableCell>
                    <TableCell>{student.firstname}</TableCell>
                    <TableCell>{student.lastname}</TableCell>
                    <TableCell>A</TableCell>

                    {/* <AttendanceTableCheckAttendanceCell /> */}

                    <TableCell>4</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell align="center">100%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </RecordLayout>
    </>
  );
};
