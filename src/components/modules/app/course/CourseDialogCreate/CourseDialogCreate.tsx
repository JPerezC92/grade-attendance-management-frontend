import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React from 'react';
import { useForm, UseModalResult } from 'src/hooks';
import { startCreateCourse, useAppDispatch } from 'src/redux';

interface CourseDialogCreateProps {
  useModalCourseDialogCreate: UseModalResult;
}

export const CourseDialogCreate: React.FC<CourseDialogCreateProps> = ({
  useModalCourseDialogCreate,
}) => {
  const { isOpen, handleCloseModal } = useModalCourseDialogCreate;
  const { formValues, handleInputChange } = useForm({
    name: 'Nuevo Curso',
  });

  const dispatch = useAppDispatch();

  const handleCreateCourse = () => {
    dispatch(startCreateCourse(formValues.name));
  };

  return (
    <>
      <>
        <Dialog
          open={isOpen}
          onClose={handleCloseModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Ingrese un nombre</DialogTitle>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateCourse();
              handleCloseModal();
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
                value={formValues.name}
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
