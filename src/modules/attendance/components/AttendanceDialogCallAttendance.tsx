import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from '@material-ui/core';
import { useForm, UseModalResult } from 'src/hooks';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { startUpdateAttendanceCheck } from '../reducer';

interface AttendanceDialogCallAttendanceProps {
  useModalAttendanceDialogCallAttendance: UseModalResult;
}

export const AttendanceDialogCallAttendance: React.FC<AttendanceDialogCallAttendanceProps> = ({
  useModalAttendanceDialogCallAttendance,
}) => {
  const {
    attendanceReducer: { currentlyCallingAttendance },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  if (!currentlyCallingAttendance.isLoaded) return null;

  const { formValues, handleInputChange } = useForm(
    Object.fromEntries(
      currentlyCallingAttendance.attendancesCheck.map((attendanceCheck) => [
        attendanceCheck.id,
        `${attendanceCheck.attendanceStatusId}`,
      ])
    )
  );

  const { isOpen, handleCloseModal } = useModalAttendanceDialogCallAttendance;
  // console.log(formValues);
  return (
    <>
      <Dialog
        fullWidth
        open={isOpen}
        onClose={() => {
          handleCloseModal();
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
            dispatch(
              startUpdateAttendanceCheck(
                currentlyCallingAttendance.attendancesCheck.map(
                  (attendanceCheck) => ({
                    ...attendanceCheck,
                    attendanceStatusId: parseInt(
                      formValues[`${attendanceCheck.id}`],
                      10
                    ),
                  })
                )
              )
            );
            handleCloseModal();
          }}
        >
          <DialogContent>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Nombres</TableCell>
                  <TableCell>Apellidos</TableCell>

                  {currentlyCallingAttendance.attendanceStates.map(
                    (attendanceStatus) => (
                      <TableCell key={attendanceStatus.id} align="center">
                        {attendanceStatus.value.toUpperCase().charAt(0)}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>

              <TableBody>
                {currentlyCallingAttendance.isLoaded &&
                  currentlyCallingAttendance.attendancesCheck.map(
                    (attendanceCheck) => (
                      <TableRow key={attendanceCheck.id}>
                        <TableCell>{attendanceCheck.firstname}</TableCell>
                        <TableCell>{attendanceCheck.lastname}</TableCell>
                        {currentlyCallingAttendance.attendanceStates.map(
                          (attendanceStatus) => (
                            <TableCell key={attendanceStatus.id} align="center">
                              <input
                                style={{ cursor: 'pointer' }}
                                type="radio"
                                name={`${attendanceCheck.id}`}
                                value={attendanceStatus.id}
                                onChange={handleInputChange}
                                checked={
                                  attendanceStatus.id ===
                                  parseInt(
                                    formValues[`${attendanceCheck.id}`],
                                    10
                                  )
                                }
                                id={attendanceStatus.value}
                              />
                            </TableCell>
                          )
                        )}
                      </TableRow>
                    )
                  )}
              </TableBody>
            </Table>
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
