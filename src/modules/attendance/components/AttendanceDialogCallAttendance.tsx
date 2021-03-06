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

  const { formValues, handleInputChange, handleSetValue } = useForm(
    Object.fromEntries(
      currentlyCallingAttendance.attendancesCheck.map((attendanceCheck) => [
        attendanceCheck.id,
        `${attendanceCheck.attendanceStatusId}`,
      ])
    )
  );

  const { isOpen, handleCloseModal } = useModalAttendanceDialogCallAttendance;

  return (
    <>
      <Dialog
        maxWidth="xl"
        open={isOpen}
        onClose={() => {
          handleCloseModal();
        }}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle
          id="form-dialog-title"
          disableTypography
          style={{ display: 'flex' }}
        >
          <Typography component="span" variant="h4">
            Llamar asistencia
          </Typography>
          <Button
            style={{ marginLeft: 'auto' }}
            variant="contained"
            color="primary"
            onClick={() => {
              Object.entries(formValues).map(([key, _]) =>
                handleSetValue(
                  key,
                  currentlyCallingAttendance.attendanceStates[0].id.toString()
                )
              );
            }}
          >
            Marcar todos
          </Button>
        </DialogTitle>

        <Divider />

        <form
          onSubmit={(e) => {
            e.preventDefault();
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
            <Table size="small" style={{ width: 'max-content' }}>
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
                        <TableCell style={{ whiteSpace: 'nowrap' }}>
                          {attendanceCheck.firstname}
                        </TableCell>
                        <TableCell style={{ whiteSpace: 'nowrap' }}>
                          {attendanceCheck.lastname}
                        </TableCell>
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
