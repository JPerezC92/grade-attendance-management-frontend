import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { startUpdateCourse } from 'src/modules/course/reducer';
import { useForm, UseModalResult } from 'src/hooks';
import { useAppDispatch } from 'src/redux';
import { Course } from '../../types';

interface CourseDialogUpdateProps {
  useModalCourseDialogUpdate: UseModalResult;
  course: Course;
}

export const CourseDialogUpdate: React.FC<CourseDialogUpdateProps> = ({
  useModalCourseDialogUpdate,
  course,
}) => {
  const { isOpen, handleCloseModal } = useModalCourseDialogUpdate;
  const { formValues, handleInputChange } = useForm({
    name: course.name,
  });

  const dispatch = useAppDispatch();

  const handleUpdateCourse = () => {
    dispatch(startUpdateCourse({ ...course, name: formValues.name }));
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
          <DialogTitle id="form-dialog-title">Cambiar nombre</DialogTitle>
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

export default CourseDialogUpdate;
