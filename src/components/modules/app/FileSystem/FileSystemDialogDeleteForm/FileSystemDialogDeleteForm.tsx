import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  Typography,
} from '@material-ui/core';
import { useFileSystemHandler, UseModalResult } from 'src/hooks';
import { useAppSelector } from 'src/redux';

interface FileSystemDialogDeleteFormProps {
  useModalDeleteFileSystemObject: UseModalResult;
}

export const FileSystemDialogDeleteForm: React.FC<FileSystemDialogDeleteFormProps> = ({
  useModalDeleteFileSystemObject,
}) => {
  const { rightClickedObject } = useAppSelector(
    (state) => state.fileSystemReducer
  );

  const { handleDeleteFileSystemObject } = useFileSystemHandler();

  return (
    <>
      <Dialog
        open={useModalDeleteFileSystemObject.isOpen}
        onClose={useModalDeleteFileSystemObject.handleCloseModal}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" disableTypography>
          <Typography variant="h6" color="error">
            ¿Estas seguro que deseas borrar &quot;
            {rightClickedObject ? rightClickedObject.name : ''}
            &quot;?
          </Typography>
        </DialogTitle>

        <Divider />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleDeleteFileSystemObject();
            useModalDeleteFileSystemObject.handleCloseModal();
          }}
        >
          <DialogActions
            style={{ marginBlock: '1em', justifyContent: 'center' }}
          >
            <Button
              onClick={useModalDeleteFileSystemObject.handleCloseModal}
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
