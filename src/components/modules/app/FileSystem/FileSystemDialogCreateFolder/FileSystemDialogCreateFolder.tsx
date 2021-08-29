import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { useFileSystemCreateObject, useForm, UseModalResult } from 'src/hooks';

interface FileSystemDialogCreateFolderProps {
  useModalCreateFolder: UseModalResult;
}

export const FileSystemDialogCreateFolder: React.FC<FileSystemDialogCreateFolderProps> = ({
  useModalCreateFolder,
}) => {
  const { formValues, handleInputChange } = useForm({
    folderName: 'Nueva carpeta',
  });
  const { handleCreateFolder } = useFileSystemCreateObject();

  return (
    <>
      <>
        <Dialog
          open={useModalCreateFolder.isOpen}
          onClose={useModalCreateFolder.handleCloseModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Ingrese un nombre</DialogTitle>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateFolder(formValues.folderName);
            }}
          >
            <DialogContent>
              <TextField
                autoFocus
                fullWidth
                id="folderName"
                margin="dense"
                name="folderName"
                onChange={handleInputChange}
                type="text"
                value={formValues.folderName}
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={useModalCreateFolder.handleCloseModal}
                color="secondary"
              >
                Cancelar
              </Button>
              <Button
                onClick={useModalCreateFolder.handleCloseModal}
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