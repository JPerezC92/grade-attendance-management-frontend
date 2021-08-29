import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { useForm, UseModalResult } from 'src/hooks';
import { useAppSelector } from 'src/redux';

interface FileSystemDialogRenameFormProps {
  useModalRenameFileSystemObject: UseModalResult;
}

export const FileSystemDialogRenameForm: React.FC<FileSystemDialogRenameFormProps> = ({
  useModalRenameFileSystemObject,
}) => {
  const { rightClickedObject } = useAppSelector(
    (state) => state.fileSystemReducer
  );

  const renameFileSystemObjectForm = useForm({
    fileSystemObjectNameUpdated: rightClickedObject
      ? rightClickedObject.name
      : '',
  });

  const handleRenameFileSystemObject = () => {
    // eslint-disable-next-line no-console
    console.log('Rename');
  };

  return (
    <>
      <>
        <Dialog
          open={useModalRenameFileSystemObject.isOpen}
          onClose={useModalRenameFileSystemObject.handleCloseModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Renombrar</DialogTitle>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRenameFileSystemObject();
            }}
          >
            <DialogContent>
              <TextField
                autoFocus
                fullWidth
                id="fileName"
                margin="dense"
                name="fileName"
                onChange={renameFileSystemObjectForm.handleInputChange}
                type="text"
                value={
                  renameFileSystemObjectForm.formValues
                    .fileSystemObjectNameUpdated
                }
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={useModalRenameFileSystemObject.handleCloseModal}
                color="secondary"
              >
                Cancelar
              </Button>
              <Button
                onClick={useModalRenameFileSystemObject.handleCloseModal}
                color="primary"
                type="submit"
              >
                Guardar
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </>
    </>
  );
};
