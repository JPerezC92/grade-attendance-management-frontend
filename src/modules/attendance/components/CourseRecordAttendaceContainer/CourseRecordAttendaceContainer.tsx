import { useState } from 'react';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import DatePicker from 'react-datepicker';
import { format, parse } from 'date-fns';

import { useAppDispatch, useAppSelector } from 'src/redux';
import { CourseRoute } from 'src/routes';
import RecordLayout from 'src/modules/courseRecord/components/RecordLayout';
import NavigationBreadcrumbs from 'src/shared/components/NavigationBreadcrumbs';
import Link from 'src/shared/components/Link';
import CurrentCourse from 'src/modules/course/components/CurrentCourse';
import CurrentCourseRecord from 'src/modules/courseRecord/components/CurrentCourseRecord';
import { Attendance } from '../../types';
import { useForm, useModal } from 'src/hooks';
import { AttendanceDialogCallAttendance } from '..';
import { startLoadingCurrentlyCallingAttendance } from '../../reducer';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './CourseRecordAttendaceContainer.module.scss';
import { es } from 'date-fns/locale';

const CallAttendance: React.FC<{ attendances: Attendance[] }> = ({
  attendances,
}) => {
  const dispatch = useAppDispatch();
  const modal = useModal();
  const thereAreAttendances = attendances.length > 0;

  const dates = attendances.map((attendance) => attendance.date);

  const { formValues, handleSetValue } = useForm({
    attendanceId: '',
  });

  const isOnArray = (date: Date) => {
    const dateFormated = format(date, 'yyyy-MM-dd');
    return dates.includes(dateFormated);
  };
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date: Date | [Date, Date]) => {
    if (!Array.isArray(date)) {
      const dateFormated = format(date, 'yyyy-MM-dd');
      const attendance = attendances.find(
        (attendance) => attendance.date === dateFormated
      );
      setStartDate(() => date);
      handleSetValue('attendanceId', attendance.id.toString());
    }
  };
  return (
    <>
      <div className={styles.callAttendance}>
        <DatePicker
          dateFormat="dd-MM-yyyy"
          selected={startDate}
          onChange={handleDateChange}
          filterDate={isOnArray}
          placeholderText="Selecciona una fecha"
          locale={es}
        />

        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            await dispatch(
              startLoadingCurrentlyCallingAttendance(
                parseInt(formValues.attendanceId, 10)
              )
            );
            modal.handleOpenModal();
          }}
          disabled={!thereAreAttendances || !startDate}
        >
          Llamar asistencia
        </Button>
      </div>

      {modal.isOpen && (
        <AttendanceDialogCallAttendance
          useModalAttendanceDialogCallAttendance={modal}
        />
      )}
    </>
  );
};

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

          <CurrentCourse>
            {(currentCourse) => (
              <CurrentCourseRecord>
                {(currentCourseRecord) => (
                  <div className={styles.recordGrade__content}>
                    <NavigationBreadcrumbs>
                      <Link href={CourseRoute.ROOT}>Cursos</Link>

                      <Link href={CourseRoute.COURSE(currentCourse.id)}>
                        {currentCourse.name}
                      </Link>

                      <Typography color="textPrimary">
                        {currentCourseRecord.career} -{' '}
                        {currentCourseRecord.semester} -{' '}
                        {currentCourseRecord.group}
                      </Typography>
                    </NavigationBreadcrumbs>
                  </div>
                )}
              </CurrentCourseRecord>
            )}
          </CurrentCourse>

          <div className={styles.recordAttendance__buttons}>
            <CallAttendance attendances={attendances} />
          </div>

          <Paper>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    Lista de Estudiantes
                  </TableCell>
                  {attendances.length > 0 && (
                    <TableCell colSpan={attendances.length} align="center">
                      Fechas
                    </TableCell>
                  )}
                  <TableCell colSpan={3} align="center">
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
                      align="center"
                    >
                      {format(
                        parse(attendance.date, 'yyyy-MM-dd', new Date()),
                        'dd-MM-yy'
                      )
                        .split('-')
                        .map((text) => (
                          <div key={text}>{text}</div>
                        ))}
                    </TableCell>
                  ))}

                  <TableCell>A</TableCell>
                  <TableCell>T</TableCell>
                  <TableCell>I</TableCell>
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

                    {student.attendances.attendancesCheck.map(
                      (attendanceCheck) => (
                        <TableCell key={attendanceCheck.id} align="center">
                          {attendanceCheck.attendanceStatusValue
                            ? attendanceCheck.attendanceStatusValue
                                .toUpperCase()
                                .charAt(0)
                            : ''}
                        </TableCell>
                      )
                    )}

                    <TableCell>{student.attendances.attended}</TableCell>
                    <TableCell>{student.attendances.late}</TableCell>
                    <TableCell>{student.attendances.skip}</TableCell>
                    <TableCell align="center">
                      {student.attendances.attendedAverage}%
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

export default CourseRecordAttendaceContainer;
