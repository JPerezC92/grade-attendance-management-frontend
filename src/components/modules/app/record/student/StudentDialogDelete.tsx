import {
  Dialog,
  DialogTitle,
  Button,
  DialogActions,
  Divider,
  Typography,
} from '@material-ui/core';
import { UseModalResult } from 'src/hooks';
import { Student } from 'src/interfaces';
import { useAppDispatch } from 'src/redux';
import { startDeleteStudent } from 'src/redux/reducers/Student/student.thunks';

interface StudentDialogDeleteProps {
  student: Student;
  modalStudentDialogDelete: UseModalResult;
}

export const StudentDialogDelete: React.FC<StudentDialogDeleteProps> = ({
  student,
  modalStudentDialogDelete,
}) => {
  const dispatch = useAppDispatch();
  const { isOpen, handleCloseModal } = modalStudentDialogDelete;

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
            ¿Estas seguro que deseas quitar a &quot;
            {student.firstname}
            &quot; de los estudiantes?
          </Typography>
        </DialogTitle>

        <Divider />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(startDeleteStudent(student));
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
