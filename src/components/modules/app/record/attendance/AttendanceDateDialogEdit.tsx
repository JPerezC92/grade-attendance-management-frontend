import {
  DialogActions,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';
import { useForm, UseModalResult } from 'src/hooks';
import { Attendance } from 'src/interfaces';
import { startUpdateAttendance, useAppDispatch } from 'src/redux';

interface AttendanceDateDialogEditProps {
  attendance: Attendance;
  useModalAttendanceDateDialogEdit: UseModalResult;
}

export const AttendanceDateDialogEdit: React.FC<AttendanceDateDialogEditProps> = ({
  attendance,
  useModalAttendanceDateDialogEdit,
}) => {
  const { isOpen, handleCloseModal } = useModalAttendanceDateDialogEdit;

  const dispatch = useAppDispatch();

  const { formValues, handleInputChange } = useForm({ date: attendance.date });

  return (
    <>
      <Dialog
        maxWidth="xs"
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" disableTypography>
          <Typography component="h2" variant="h4">
            Editar fecha
          </Typography>
        </DialogTitle>

        <Divider />

        <form
          onSubmit={(e) => {
            e.preventDefault();

            dispatch(startUpdateAttendance({ ...attendance, ...formValues }));

            handleCloseModal();
          }}
        >
          <DialogContent>
            <TextField
              id="date"
              label="Fecha"
              type="date"
              name="date"
              onChange={handleInputChange}
              defaultValue={formValues.date}
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="secondary">
              Cancelar
            </Button>
            <Button color="primary" type="submit">
              Guardar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
