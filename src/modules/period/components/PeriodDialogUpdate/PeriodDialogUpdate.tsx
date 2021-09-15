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
import { useForm, UseModalResult } from 'src/hooks';
import { startUpdatePeriod } from 'src/modules/period/reducer';
import { useAppDispatch } from 'src/redux';
import { Period } from '../../types';

interface PeriodDialogUpdateProps {
  modalPeriodDialogUpdate: UseModalResult;
  period: Period;
}

const PeriodDialogUpdate: React.FC<PeriodDialogUpdateProps> = ({
  modalPeriodDialogUpdate,
  period,
}) => {
  const { isOpen, handleCloseModal } = modalPeriodDialogUpdate;
  const { formValues, handleInputChange } = useForm({
    period: period.value,
  });

  const dispatch = useAppDispatch();

  const handleUpdateCourse = () => {
    dispatch(startUpdatePeriod({ ...period, value: formValues.period }));
  };

  return (
    <>
      <>
        <Dialog
          maxWidth="sm"
          open={isOpen}
          onClose={handleCloseModal}
          aria-labelledby="form-dialog-title"
          onClick={(e) => e.stopPropagation()}
        >
          <DialogTitle id="form-dialog-title" disableTypography>
            <Typography component="h2" variant="h4">
              Periodo
            </Typography>
          </DialogTitle>

          <Divider />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUpdateCourse();
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
    </>
  );
};

export default PeriodDialogUpdate;
