import { useRouter } from 'next/router';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';

import { useAppDispatch, useAppSelector } from 'src/redux';
import { useForm, UseModalResult } from 'src/hooks';
import { startCreateCourseRecord } from 'src/modules/courseRecord/reducer/thunks';
import LoadPeriods from 'src/modules/period/components/LoadPeriods';
import { CourseRecordRoute } from 'src/routes';

interface CourseIdDialogCreateProps {
  useModalCourseIdDialogCreate: UseModalResult;
}

const CourseRecordDialogCreate: React.FC<CourseIdDialogCreateProps> = ({
  useModalCourseIdDialogCreate,
}) => {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { periodReducer } = useAppSelector((state) => state);
  const { isOpen, handleCloseModal } = useModalCourseIdDialogCreate;
  const { formValues, handleInputChange } = useForm({
    career: '',
    turn: '',
    group: '',
    semester: '',
    periodId: '',
  });

  const handleCreateCourseRecord = async () => {
    const response = await dispatch(
      startCreateCourseRecord({
        ...formValues,
        periodId: parseInt(formValues.periodId, 10),
      })
    );

    if (response.success)
      router.push(
        CourseRecordRoute.SETTINGS(
          response.payload.courseId,
          response.payload.id
        )
      );
  };

  return (
    <>
      <LoadPeriods>
        <Dialog
          maxWidth="xs"
          open={isOpen}
          onClose={handleCloseModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Nuevo registro</DialogTitle>

          <Divider />

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateCourseRecord();
              handleCloseModal();
            }}
          >
            <DialogContent>
              <TextField
                autoFocus
                fullWidth
                id="career"
                label="Carrera"
                margin="dense"
                name="career"
                onChange={handleInputChange}
                type="text"
                value={formValues.career}
                variant="outlined"
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
                variant="outlined"
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
                variant="outlined"
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
                variant="outlined"
              />

              <FormControl fullWidth margin="dense" variant="outlined">
                <InputLabel>Periodo</InputLabel>
                <Select
                  name="periodId"
                  value={formValues.periodId}
                  onChange={handleInputChange}
                  label="Periodo"
                >
                  {periodReducer.periods.map((period) => (
                    <MenuItem key={period.id} value={period.id}>
                      {period.value}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
      </LoadPeriods>
    </>
  );
};

export default CourseRecordDialogCreate;
