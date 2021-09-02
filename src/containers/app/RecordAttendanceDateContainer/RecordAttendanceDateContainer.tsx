import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { RecordLayout } from 'src/components/modules';
import {
  AttendanceDateButtonCreate,
  AttendanceDateButtonEdit,
} from 'src/components/modules/app/record/attendance';
import { AttendanceDateButtonDelete } from 'src/components/modules/app/record/attendance/AttendanceDateButtonDelete';
import { useAppSelector } from 'src/redux';
import styles from './RecordAttendanceDateContainer.module.scss';

export const RecordAttendanceDateContainer: React.FC = () => {
  const { attendances } = useAppSelector((state) => state.attendanceReducer);

  return (
    <>
      <RecordLayout>
        <div className={styles.recordAttendanceDate__content}>
          <Typography className={styles.title} component="h1" variant="h3">
            Fechas de asistencias
          </Typography>

          <div className={styles.recordAttendanceDate__buttons}>
            <AttendanceDateButtonCreate />
          </div>

          <Paper>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Nº</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Total asistentes</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {attendances.map((attendance, index) => (
                  <TableRow key={attendance.id}>
                    <TableCell>{++index}</TableCell>
                    <TableCell>{attendance.date}</TableCell>
                    <TableCell align="center">8</TableCell>
                    <TableCell>
                      <div style={{ display: 'flex' }}>
                        <AttendanceDateButtonEdit attendance={attendance} />
                        <AttendanceDateButtonDelete attendance={attendance} />
                      </div>
                    </TableCell>
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
