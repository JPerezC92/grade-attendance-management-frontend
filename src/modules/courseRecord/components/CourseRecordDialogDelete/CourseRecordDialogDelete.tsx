import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { UseModalResult } from 'src/hooks';
import { useAppDispatch } from 'src/redux';
import { startDeleteCourseRecord } from '../../reducer/thunks';
import { CourseRecord } from '../../types';

interface CourseRecordDialogDeleteProps {
  modal: UseModalResult;
  courseRecord: CourseRecord;
}

const CourseRecordDialogDelete: React.FC<CourseRecordDialogDeleteProps> = ({
  modal,
  courseRecord,
}) => {
  const dispatch = useAppDispatch();
  const { isOpen, handleCloseModal } = modal;
  return (
    <>
      <Dialog
        maxWidth="xs"
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="form-dialog-title"
        onClick={(e) => e.stopPropagation()}
      >
        <DialogTitle id="form-dialog-title" disableTypography>
          <Typography variant="h6" color="error">
            ¿Estas seguro que deseas borrar el registro?
          </Typography>
        </DialogTitle>

        <Divider />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(startDeleteCourseRecord(courseRecord.id));
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

export default CourseRecordDialogDelete;
