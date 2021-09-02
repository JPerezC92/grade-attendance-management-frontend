import {
  Dialog,
  DialogTitle,
  Button,
  DialogActions,
  Divider,
  Typography,
} from '@material-ui/core';
import { format, parse } from 'date-fns';
import { UseModalResult } from 'src/hooks';
import { Attendance } from 'src/interfaces';
import { useAppDispatch } from 'src/redux';
import { startDeleteAttendance } from 'src/redux/reducers';

interface AttendanceDateDialogDeleteProps {
  attendance: Attendance;
  useModalAttendanceDateDialogDelete: UseModalResult;
}

export const AttendanceDateDialogDelete: React.FC<AttendanceDateDialogDeleteProps> = ({
  attendance,
  useModalAttendanceDateDialogDelete,
}) => {
  const dispatch = useAppDispatch();
  const { isOpen, handleCloseModal } = useModalAttendanceDateDialogDelete;

  return (
    <>
      <Dialog
        maxWidth="xs"
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" disableTypography>
          <Typography variant="h6" color="error">
            ¿Estas seguro que deseas borrar la fecha &quot;
            {format(
              parse(attendance.date, 'yyyy-MM-dd', new Date()),
              'dd-MM-yyyy'
            )}
            &quot;?
          </Typography>
        </DialogTitle>

        <Divider />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(startDeleteAttendance(attendance));
            handleCloseModal();
          }}
        >
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
