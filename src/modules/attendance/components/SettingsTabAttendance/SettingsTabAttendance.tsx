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
import { CourseRoute } from 'src/routes';
import Link from 'src/shared/components/Link';
import NavigationBreadcrumbs from 'src/shared/components/NavigationBreadcrumbs';
import AttendanceButtonCreate from '../AttendanceButtonCreate';
import AttendanceButtonDelete from '../AttendanceButtonDelete';
import AttendanceButtonEdit from '../AttendanceButtonEdit';
import styles from './SettingsTabAttendance.module.scss';

const SettingsTabAttendance: React.FC = () => {
  const {
    attendanceReducer: { attendances },
    courseReducer: { currentCourse },
    courseRecordReducer: { currentCourseRecord },
  } = useAppSelector((state) => state);

  return (
    <>
      <>
        <div className={styles.recordAttendanceDate__content}>
          <Typography className={styles.title} component="h1" variant="h3">
            Fechas de asistencias
          </Typography>

          {currentCourse.isLoaded && currentCourseRecord.isLoaded && (
            <NavigationBreadcrumbs>
              <Link href={CourseRoute.ROOT}>Cursos</Link>

              <Link href={CourseRoute.COURSE(currentCourse.id)}>
                {currentCourse.name}
              </Link>

              <Typography color="textPrimary">
                {currentCourseRecord.career} - {currentCourseRecord.semester} -{' '}
                {currentCourseRecord.group}
              </Typography>
            </NavigationBreadcrumbs>
          )}

          <div className={styles.recordAttendanceDate__buttons}>
            <AttendanceButtonCreate />
          </div>

          <Paper>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Nº</TableCell>
                  <TableCell>Fecha</TableCell>
                  <TableCell>Tipo</TableCell>
                  <TableCell>Acciones</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {attendances.map((attendance, index) => (
                  <TableRow key={attendance.id}>
                    <TableCell>{++index}</TableCell>
                    <TableCell>
                      {attendance.date.split('-').reverse().join('-')}
                    </TableCell>
                    <TableCell>{attendance.type}</TableCell>
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
