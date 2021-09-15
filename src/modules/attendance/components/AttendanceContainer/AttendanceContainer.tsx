import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { format, parse } from 'date-fns';

import { useAppSelector } from 'src/redux';
import AttendanceButtonCallAttendance from 'src/modules/attendance/components/AttendanceButtonCallAttendance';
import RecordLayout from 'src/modules/courseRecord/components/RecordLayout';
import styles from './AttendanceContainer.module.scss';

const CourseRecordAttendaceContainer: React.FC = () => {
  const state = useAppSelector((state) => state);
  const {
    studentReducer: { students },
    attendanceReducer: { attendances },
  } = state;

  return (
    <>
      <RecordLayout>
        <div className={styles.recordAttendance__content}>
          <Typography className={styles.title} component="h1" variant="h3">
            Asistencias
          </Typography>

          <div className={styles.recordAttendance__buttons}>
            <AttendanceButtonCallAttendance />
          </div>

          <Paper>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    Lista de Estudiantes
                  </TableCell>
                  <TableCell colSpan={attendances.length} align="center">
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
                  {attendances.map((attendance) => (
                    <TableCell
                      style={
                        {
                          // transform: 'translate(-35px, 0px) rotate(270deg)',
                          // height: '1rem',
                          // width: '1rem !important',
                        }
                      }
                      key={attendance.id}
                    >
                      {format(
                        parse(attendance.date, 'yyyy-MM-dd', new Date()),
                        'dd-MM-yy'
                      )}
                    </TableCell>
                  ))}

                  <TableCell>A</TableCell>
                  <TableCell>T</TableCell>
                  <TableCell>I</TableCell>
                  <TableCell>J</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {students.map((student) => (
                  <TableRow key={student.id}>
                    <TableCell>{student.studentCode}</TableCell>
                    <TableCell style={{ whiteSpace: 'pre' }}>
                      {student.firstname}
                    </TableCell>
                    <TableCell style={{ whiteSpace: 'pre' }}>
                      {student.lastname}
                    </TableCell>

                    {attendances.map((attendance) => (
                      <TableCell key={attendance.id} align="center">
                        A
                      </TableCell>
                    ))}

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

export default CourseRecordAttendaceContainer;
