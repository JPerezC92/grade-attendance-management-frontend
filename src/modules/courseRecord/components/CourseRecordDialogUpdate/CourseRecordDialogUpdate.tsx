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
import { useForm, UseModalResult } from 'src/hooks';
import LoadPeriods from 'src/modules/period/components/LoadPeriods';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { startUpdateCourseRecord } from '../../reducer/thunks/startUpdateCourseRecord';
import { CourseRecord } from '../../types';

interface CourseRecordDialogUpdateProps {
  modal: UseModalResult;
  courseRecord: CourseRecord;
}

const CourseRecordDialogUpdate: React.FC<CourseRecordDialogUpdateProps> = ({
  modal,
  courseRecord,
}) => {
  const dispatch = useAppDispatch();

  const { isOpen, handleCloseModal } = modal;
  const { periodReducer } = useAppSelector((state) => state);

  const { formValues, handleInputChange } = useForm({
    career: courseRecord.career,
    turn: courseRecord.turn,
    group: courseRecord.group,
    semester: courseRecord.semester,
    periodId: `${courseRecord.periodId}`,
  });

  return (
    <>
      <>
        <LoadPeriods>
          <Dialog
            maxWidth="xs"
            open={isOpen}
            onClose={handleCloseModal}
            aria-labelledby="form-dialog-title"
            onClick={(e) => e.stopPropagation()}
          >
            <DialogTitle id="form-dialog-title">Editar registro</DialogTitle>

            <Divider />

            <form
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  startUpdateCourseRecord({
                    ...courseRecord,
                    ...formValues,
                    periodId: parseInt(formValues.periodId, 10),
                  })
                );
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

                {periodReducer.periods.length > 0 && (
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
                )}
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
    </>
  );
};

export default CourseRecordDialogUpdate;
