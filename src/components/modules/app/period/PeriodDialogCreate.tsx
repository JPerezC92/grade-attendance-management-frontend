import {
  Button,
  DialogTitle,
  TextField,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  Divider,
} from '@material-ui/core';
import { useForm, UseModalResult } from 'src/hooks';
import { startCreatePeriod, useAppDispatch } from 'src/redux';

interface PeriodDialogRegisterProps {
  modalPeriodDialogCreate: UseModalResult;
}

export const PeriodDialogCreate: React.FC<PeriodDialogRegisterProps> = ({
  modalPeriodDialogCreate,
}) => {
  const dispatch = useAppDispatch();
  const { isOpen, handleCloseModal } = modalPeriodDialogCreate;
  const { formValues, handleInputChange } = useForm({
    period: '',
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
            Nuevo periodo
          </Typography>
        </DialogTitle>

        <Divider />

        <form
          onSubmit={(e) => {
            e.preventDefault();

            dispatch(
              startCreatePeriod({
                value: formValues.period,
                instructorId: 1,
              })
            );

            handleCloseModal();
          }}
        >
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              id="period"
              margin="dense"
              name="period"
              onChange={handleInputChange}
              type="text"
              variant="outlined"
              label="Periodo"
              value={formValues.period}
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
