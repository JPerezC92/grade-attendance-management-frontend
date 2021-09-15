import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import { useAppSelector } from 'src/redux';
import AttendanceButtonCreate from '../AttendanceButtonCreate';
import AttendanceButtonDelete from '../AttendanceButtonDelete';
import AttendanceButtonEdit from '../AttendanceButtonEdit';
import styles from './SettingsTabAttendance.module.scss';

const SettingsTabAttendance: React.FC = () => {
  const { attendances } = useAppSelector((state) => state.attendanceReducer);

  return (
    <>
      <>
        <div className={styles.recordAttendanceDate__content}>
          <Typography className={styles.title} component="h1" variant="h3">
            Fechas de asistencias
          </Typography>

          <div className={styles.recordAttendanceDate__buttons}>
            <AttendanceButtonCreate />
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
                        <AttendanceButtonEdit attendance={attendance} />
                        <AttendanceButtonDelete attendance={attendance} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </div>
      </>
    </>
  );
};

export default SettingsTabAttendance;
