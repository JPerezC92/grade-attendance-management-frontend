import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Typography,
} from '@material-ui/core';
import { startDeleteActivity } from 'src/modules/activity/reducer';
import { UseModalResult } from 'src/hooks';
import { useAppDispatch } from 'src/redux';
import { Activity } from '../../types';

interface ActivityDialogDeleteProps {
  modalActivityDialogDelete: UseModalResult;
  activity: Activity;
}

const ActivityDialogDelete: React.FC<ActivityDialogDeleteProps> = ({
  activity,
  modalActivityDialogDelete,
}) => {
  const dispatch = useAppDispatch();
  const { isOpen, handleCloseModal } = modalActivityDialogDelete;

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
            ¿Estas seguro que deseas borrar la actividad &quot;
            {activity.name}
            &quot;?
          </Typography>
        </DialogTitle>

        <Divider />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(startDeleteActivity(activity));
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

export default ActivityDialogDelete;
