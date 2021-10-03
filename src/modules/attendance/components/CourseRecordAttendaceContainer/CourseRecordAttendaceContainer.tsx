import React from 'react';
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
import { format, parse } from 'date-fns';

import { useAppDispatch, useAppSelector } from 'src/redux';
import { CourseRoute } from 'src/routes';
import RecordLayout from 'src/modules/courseRecord/components/RecordLayout';
import NavigationBreadcrumbs from 'src/shared/components/NavigationBreadcrumbs';
import Link from 'src/shared/components/Link';
import CurrentCourse from 'src/modules/course/components/CurrentCourse';
import styles from './CourseRecordAttendaceContainer.module.scss';
import CurrentCourseRecord from 'src/modules/courseRecord/components/CurrentCourseRecord';
import { Attendance } from '../../types';
import { useForm, useModal } from 'src/hooks';
import { AttendanceDialogCallAttendance } from '..';
import { startLoadingCurrentlyCallingAttendance } from '../../reducer';

const CallAttendance: React.FC<{ attendances: Attendance[] }> = ({
  attendances,
}) => {
  const dispatch = useAppDispatch();
  const modal = useModal();

  const { formValues, handleInputChange } = useForm({
    attendanceId: attendances[attendances.length - 1].id,
  });

  return (
    <>
      <FormControl variant="outlined" size="small">
        {/* <InputLabel>Fechas</InputLabel> */}
        <Select
          id="attendanceId"
          name="attendanceId"
          value={formValues.attendanceId}
          onChange={handleInputChange}
        >
          {attendances.map((attendance) => (
            <MenuItem key={attendance.id} value={attendance.id}>
              {attendance.date}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* <AttendanceButtonCallAttendance /> */}

      <Button
        variant="contained"
        color="primary"
        onClick={async () => {
          await dispatch(
            startLoadingCurrentlyCallingAttendance(formValues.attendanceId)
          );
          modal.handleOpenModal();
        }}
      >
        Llamar asistencia
      </Button>

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
                        {currentCourseRecord.career} - S
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
                  <TableCell colSpan={attendances.length} align="center">
                    Fechas
                  </TableCell>
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
