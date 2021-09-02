import {
  Button,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Divider,
  TextField,
} from '@material-ui/core';
import { format } from 'date-fns';
import { useForm, UseModalResult } from 'src/hooks';
import { startCreateAttendance, useAppDispatch } from 'src/redux';

interface AttendanceDateDialogCreateProps {
  useModalAttendanceDateDialogCreate: UseModalResult;
}

export const AttendanceDateDialogCreate: React.FC<AttendanceDateDialogCreateProps> = ({
  useModalAttendanceDateDialogCreate,
}) => {
  const dispatch = useAppDispatch();

  const { isOpen, handleCloseModal } = useModalAttendanceDateDialogCreate;
  const { formValues, handleInputChange } = useForm({
    date: format(new Date(), 'yyyy-MM-dd'),
  });

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
            Nueva fecha
          </Typography>
        </DialogTitle>

        <Divider />

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            dispatch(startCreateAttendance(formValues.date));
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
