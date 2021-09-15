import React, { useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Radio,
} from '@material-ui/core';
import { useForm, UseModalResult } from 'src/hooks';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { attendanceAction } from '../reducer';

interface AttendanceDialogCallAttendanceProps {
  useModalAttendanceDialogCallAttendance: UseModalResult;
}

export const AttendanceDialogCallAttendance: React.FC<AttendanceDialogCallAttendanceProps> = ({
  useModalAttendanceDialogCallAttendance,
}) => {
  const {
    attendanceReducer: {
      attendances,
      attendanceStatuses,
      currentCheckAttendances,
    },
    studentReducer: { students },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const { isOpen, handleCloseModal } = useModalAttendanceDialogCallAttendance;
  const attendanceForm = useForm({ attendanceId: '' });

  const studentsWithCheckAttendance = currentCheckAttendances
    ? students.map((student) => {
        const checkAttendance = currentCheckAttendances.find(
          () =>
            // checkAttendance.studentId === student.id ? checkAttendance : null
            null
        );
        return { ...student, checkAttendance };
      })
    : [];

  const obj = Object.fromEntries(
    studentsWithCheckAttendance.map((student) => [
      student.id,
      student.checkAttendance?.statusId ? student.checkAttendance.statusId : '',
    ])
  );

  const checkAttendanceForm = useForm(obj);

  useEffect(() => {
    checkAttendanceForm.reset();
  }, [currentCheckAttendances]);

  return (
    <>
      <Dialog
        fullWidth
        open={isOpen}
        onClose={() => {
          handleCloseModal();
          dispatch(attendanceAction.setCurrentCheckAttendances(null));
        }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" disableTypography>
          <Typography component="h2" variant="h4">
            Llamar asistencia
          </Typography>
        </DialogTitle>

        <Divider />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            // dispatch(startDeleteAttendance(attendance));
            dispatch(attendanceAction.setCurrentCheckAttendances(null));
            handleCloseModal();
          }}
        >
          <DialogContent>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Seleccionar fecha
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                value={attendanceForm.formValues.attendanceId}
                label="Seleccionar fecha"
                name="attendanceId"
                onChange={(e) => {
                  dispatch(attendanceAction.setCurrentCheckAttendances(null));
                  attendanceForm.handleInputChange(e);
                  // e.target.value !== '' &&
                  //   dispatch(
                  //     attendanceAction.setCurrentCheckAttendances(
                  //       attendances.find(
                  //         (attendance) => attendance.id === e.target.value
                  //       ).checkAttendances
                  //     )
                  //   );
                }}
              >
                <MenuItem value="">Seleccionar fecha</MenuItem>

                {attendances.map((attendance) => (
                  <MenuItem key={attendance.id} value={attendance.id}>
                    {attendance.date}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Divider style={{ marginBlock: '1rem' }} />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto auto auto',
                alignItems: 'center',
              }}
            >
              <span>Nombre</span>
              <span>A</span>
              <span>T</span>
              <span>I</span>
              {currentCheckAttendances &&
                studentsWithCheckAttendance.map((student) => (
                  <React.Fragment key={student.id}>
                    <span>{student.firstname}</span>

                    {attendanceStatuses.map((attendanceStatus) => (
                      <Radio
                        key={attendanceStatus.id}
                        checked={
                          checkAttendanceForm.formValues[student.id] ===
                          attendanceStatus.id
                        }
                        name={student.id.toString()}
                        onChange={checkAttendanceForm.handleInputChange}
                        value={attendanceStatus.id}
                      />
                    ))}
                  </React.Fragment>
                ))}
            </div>
          </DialogContent>
          <DialogActions
            style={{ marginBlock: '1em', justifyContent: 'center' }}
          >
            <Button
              onClick={handleCloseModal}
              variant="outlined"
              color="secondary"
            >
              Cancelar
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Aceptar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
