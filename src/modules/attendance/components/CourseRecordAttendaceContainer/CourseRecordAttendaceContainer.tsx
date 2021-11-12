import { useState } from 'react';
import {
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
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
import { useModal } from 'src/hooks';
import { AttendanceDialogCallAttendance } from '..';
import { startLoadingCurrentlyCallingAttendance } from '../../reducer';
import { es } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './CourseRecordAttendaceContainer.module.scss';

const months = {
  '1': 'Enero',
  '2': 'Febrero',
  '3': 'Marzo',
  '4': 'Abril',
  '5': 'Mayo',
  '6': 'Junio',
  '7': 'Julio',
  '8': 'Agosto',
  '9': 'Septiembre',
  '10': 'Octubre',
  '11': 'Noviembre',
  '12': 'Diciembre',
} as const;

const CallAttendance: React.FC<{ attendances: Attendance[] }> = ({
  attendances,
}) => {
  const dispatch = useAppDispatch();
  const modal = useModal();
  const thereAreAttendances = attendances.length > 0;

  const dates = attendances.map((attendance) => attendance.date);

  const [attendanceId, setAttendanceId] = useState('');
  const [attendanceType, setAttendanceType] = useState('Teoria');

  const isOnArray = (date: Date) => {
    const dateFormated = format(date, 'yyyy-MM-dd');
    return dates.includes(dateFormated);
  };
  const [startDate, setStartDate] = useState(null);

  const handleDateChange = (date: Date | [Date, Date]) => {
    if (!Array.isArray(date)) {
      const dateFormated = format(date, 'yyyy-MM-dd');
      const attendance = attendances.find(
        (attendance) =>
          attendance.date === dateFormated && attendance.type === attendanceType
      );

      if (attendance) {
        setStartDate(() => date);
        setAttendanceId(() => attendance.id.toString());
      }
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

        <FormControl margin="dense" variant="outlined">
          <Select
            name="attendanceType"
            value={attendanceType}
            onChange={(e) => {
              const value = e.target.value;

              if (typeof value === 'string') {
                setAttendanceType(() => value);

                if (typeof value === 'string' && startDate) {
                  const attendance = attendances.find(
                    (attendance) =>
                      attendance.date === format(startDate, 'yyyy-MM-dd') &&
                      attendance.type === value
                  );

                  if (attendance) {
                    setAttendanceId(() => attendance.id.toString());
                  }
                }
              }
            }}
          >
            <MenuItem value="Teoria">Teoria</MenuItem>
            <MenuItem value="Practica">Practica</MenuItem>
          </Select>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={async () => {
            await dispatch(
              startLoadingCurrentlyCallingAttendance(parseInt(attendanceId, 10))
            );
            modal.handleOpenModal();
          }}
          disabled={!thereAreAttendances || !attendanceId}
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

  let monthsFiltered: { month: string; daysQuantity: number }[] = [];

  for (const attendance of attendances) {
    const monthNumber = format(
      parse(attendance.date, 'yyyy-MM-dd', new Date()),
      'MM'
    );
    if (!monthsFiltered.some(({ month }) => month === monthNumber)) {
      monthsFiltered = [
        ...monthsFiltered,
        { month: monthNumber, daysQuantity: 1 },
      ];
    } else {
      const index = monthsFiltered.findIndex(
        ({ month }) => month === monthNumber
      );
      monthsFiltered[index].daysQuantity += 1;
    }
  }

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
                  {monthsFiltered.length > 0 && (
                    <>
                      {monthsFiltered.map((monthFilter) => (
                        <TableCell
                          style={{
                            borderInline: '1px solid gray',
                          }}
                          key={monthFilter.month}
                          colSpan={monthFilter.daysQuantity}
                          align="center"
                        >
                          {months[monthFilter.month]}
                        </TableCell>
                      ))}
                    </>
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
                  {attendances.map((attendance) => {
                    return (
                      <TableCell key={attendance.id} align="center">
                        {format(
                          parse(attendance.date, 'yyyy-MM-dd', new Date()),
                          'dd'
                        )}
                        -{attendance.type[0]}
                      </TableCell>
                    );
                  })}

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
