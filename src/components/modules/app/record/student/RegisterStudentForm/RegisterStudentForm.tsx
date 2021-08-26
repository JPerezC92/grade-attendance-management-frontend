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
// import styles from  './RegisterStudentForm.module.scss';

interface RegisterStudentFormProps {
  useModalRegisterStudentForm: UseModalResult;
}

export const RegisterStudentForm: React.FC<RegisterStudentFormProps> = ({
  useModalRegisterStudentForm,
}) => {
  const { isOpen, handleClose: handleCloseModal } = useModalRegisterStudentForm;
  const { formValues, handleInputChange, reset: resetForm } = useForm({
    firstname: '',
    lastname: '',
    studentId: '',
  });

  const handleClose = () => {
    resetForm();
    handleCloseModal();
  };

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" disableTypography>
          <Typography component="h2" variant="h4">
            Registrar Estudiante
          </Typography>
        </DialogTitle>

        <Divider />
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // eslint-disable-next-line no-console
            console.log({ formValues });
            handleClose();
          }}
        >
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              id="firstname"
              margin="dense"
              name="firstname"
              onChange={handleInputChange}
              type="text"
              variant="outlined"
              label="Nombres"
              value={formValues.firstname}
            />

            <TextField
              fullWidth
              id="lastname"
              margin="dense"
              name="lastname"
              onChange={handleInputChange}
              type="text"
              variant="outlined"
              label="Apellidos"
              value={formValues.lastname}
            />

            <TextField
              fullWidth
              id="studentId"
              margin="dense"
              name="studentId"
              onChange={handleInputChange}
              type="text"
              variant="outlined"
              label="Codigo de estudiante"
              value={formValues.studentId}
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
      </Dialog>
    </>
  );
};
