import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  TextareaAutosize,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { useForm, useModal } from 'src/hooks';
// import styles from './CreateActivityButton.module.scss';

export const CreateActivityButton: React.FC = () => {
  const { formValues, handleInputChange } = useForm({
    name: '',
    comment: '',
  });

  const { isOpen, handleClickOpen, handleClose } = useModal();

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Agregar Actividad
      </Button>

      <Dialog
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
            // eslint-disable-next-line no-console
            console.log({ formValues });
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

            <TextareaAutosize
              aria-label="minimum height"
              maxLength={200}
              minRows={3}
              onChange={handleInputChange}
              placeholder="Comentario"
              style={{ width: '100%' }}
              value={formValues.comment}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancelar
            </Button>
            <Button onClick={handleClose} color="primary" type="submit">
              Guardar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
