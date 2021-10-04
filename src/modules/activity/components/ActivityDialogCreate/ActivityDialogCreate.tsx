import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';

import { useAppDispatch } from 'src/redux';
import { startCreateActivity } from 'src/modules/activity/reducer';
import { useForm, UseModalResult } from 'src/hooks';
import CurrentCourseRecord from 'src/modules/courseRecord/components/CurrentCourseRecord';

interface ActivityDialogCreateProps {
  modalActivityDialogCreate: UseModalResult;
}

const ActivityDialogCreate: React.FC<ActivityDialogCreateProps> = ({
  modalActivityDialogCreate,
}) => {
  const dispatch = useAppDispatch();
  const { isOpen, handleCloseModal } = modalActivityDialogCreate;

  const { formValues, handleInputChange, reset: resetForm } = useForm({
    name: '',
    value: '',
  });

  const handleClose = () => {
    resetForm();
    handleCloseModal();
  };

  return (
    <>
      <Dialog
        maxWidth="xs"
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" disableTypography>
          <Typography component="h2" variant="h4">
            Nueva Actividad
          </Typography>
        </DialogTitle>

        <Divider />

        <CurrentCourseRecord>
          {(currentCourseRecord) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();

                dispatch(
                  startCreateActivity({
                    ...formValues,
                    value: parseInt(formValues.value, 10),
                    courseRecordId: currentCourseRecord.id,
                  })
                );
                handleClose();
              }}
            >
              <DialogContent>
                <TextField
                  autoFocus
                  fullWidth
                  id="name"
                  margin="dense"
                  name="name"
                  onChange={handleInputChange}
                  type="text"
                  variant="outlined"
                  label="Nombre"
                  value={formValues.name}
                />

                <TextField
                  fullWidth
                  id="value"
                  margin="dense"
                  name="value"
                  onChange={handleInputChange}
                  type="number"
                  variant="outlined"
                  label="Valor"
                  value={formValues.value}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="secondary">
                  Cancelar
                </Button>
                <Button color="primary" type="submit">
                  Guardar
                </Button>
              </DialogActions>
            </form>
          )}
        </CurrentCourseRecord>
      </Dialog>
    </>
  );
};

export default ActivityDialogCreate;
