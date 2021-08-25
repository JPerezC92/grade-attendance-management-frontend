import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { useFolderSystemCreateObject } from 'src/hooks';
// import styles from './CreateFolderButton.module.scss';

// interface CreateFolderButtonProps {}

// export const CreateFolderButton: React.FC<CreateFolderButtonProps> = () => {
export const CreateFolderButton: React.FC = () => {
  const {
    modal,
    handleInputChange,
    handleCreateFolder,
    objectName,
  } = useFolderSystemCreateObject('folderName', 'Nueva carpeta');
  const { isOpen, handleClose, handleClickOpen } = modal;

  return (
    <>
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Crear carpeta
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Ingrese un nombre</DialogTitle>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCreateFolder();
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
              value={objectName}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancelar
            </Button>
            <Button onClick={handleClose} color="primary" type="submit">
              Guardar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
