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
import { startCreateActivity } from 'src/modules/activity/reducer';
import { useForm, UseModalResult } from 'src/hooks';
import { useAppDispatch, useAppSelector } from 'src/redux';

interface ActivityDialogCreateProps {
  modalActivityDialogCreate: UseModalResult;
}

const ActivityDialogCreate: React.FC<ActivityDialogCreateProps> = ({
  modalActivityDialogCreate,
}) => {
  const dispatch = useAppDispatch();
  const {
    courseRecordReducer: { currentCourseRecord },
  } = useAppSelector((state) => state);
  const { isOpen, handleCloseModal } = modalActivityDialogCreate;

  const { formValues, handleInputChange, reset: resetForm } = useForm({
    name: '',
    value: '',
    scoresQuantity: '',
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

        <form
          onSubmit={(e) => {
            e.preventDefault();

            dispatch(
              startCreateActivity({
                ...formValues,
                value: parseInt(formValues.value, 10),
                scoresQuantity: parseInt(formValues.scoresQuantity, 10),
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

            <TextField
              fullWidth
              id="scoresQuantity"
              margin="dense"
              name="scoresQuantity"
              onChange={handleInputChange}
              type="number"
              variant="outlined"
              label="Numero de calificaciones"
              value={formValues.scoresQuantity}
            />

            {/* <TextareaAutosize
              aria-label="minimum height"
              maxLength={200}
              // minRows={3}
              onChange={handleInputChange}
              placeholder="Comentario"
              name="comment"
              style={{ width: '100%' }}
              value={formValues.comment}
            /> */}
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
      </Dialog>
    </>
  );
};

export default ActivityDialogCreate;
