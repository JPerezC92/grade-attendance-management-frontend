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
import { useAppDispatch } from 'src/redux';
import { startCreateCourseRecord } from 'src/redux/reducers/CourseRecord/thunks/startCreateCourseRecord';

interface CourseIdDialogCreateProps {
  useModalCourseIdDialogCreate: UseModalResult;
}

export const CourseIdDialogCreate: React.FC<CourseIdDialogCreateProps> = ({
  useModalCourseIdDialogCreate,
}) => {
  const { isOpen, handleCloseModal } = useModalCourseIdDialogCreate;
  const { formValues, handleInputChange } = useForm({
    career: '',
    turn: '',
    group: '',
    semester: '',
  });

  const dispatch = useAppDispatch();

  const handleCreateCourse = () => {
    dispatch(startCreateCourseRecord(formValues));
  };

  return (
    <>
      <>
        <Dialog
          maxWidth="xs"
          open={isOpen}
          onClose={handleCloseModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Nuevo registro</DialogTitle>
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
                label="Carrera"
                id="career"
                margin="dense"
                name="career"
                onChange={handleInputChange}
                type="text"
                value={formValues.career}
              />

              <TextField
                fullWidth
                label="Semestre"
                id="semester"
                margin="dense"
                name="semester"
                onChange={handleInputChange}
                type="text"
                value={formValues.semester}
              />
              <TextField
                fullWidth
                label="Grupo"
                id="group"
                margin="dense"
                name="group"
                onChange={handleInputChange}
                type="text"
                value={formValues.group}
              />
              <TextField
                fullWidth
                label="Turno"
                id="turn"
                margin="dense"
                name="turn"
                onChange={handleInputChange}
                type="text"
                value={formValues.turn}
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
