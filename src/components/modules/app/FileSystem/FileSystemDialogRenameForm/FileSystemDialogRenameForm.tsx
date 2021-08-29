import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { useFileSystemHandler, useForm, UseModalResult } from 'src/hooks';
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

  const { handleRenameFileSystemObject } = useFileSystemHandler();

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
              handleRenameFileSystemObject(
                renameFileSystemObjectForm.formValues
                  .fileSystemObjectNameUpdated
              );
              useModalRenameFileSystemObject.handleCloseModal();
            }}
          >
            <DialogContent>
              <TextField
                autoFocus
                fullWidth
                id="fileSystemObjectNameUpdated"
                margin="dense"
                name="fileSystemObjectNameUpdated"
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
