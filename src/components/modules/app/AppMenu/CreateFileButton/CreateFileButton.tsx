import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import { useFolderSystemCreateObject } from 'src/hooks';
// import styles from './CreateFileButton.module.scss';

// interface CreateFolderButtonProps {}

// export const CreateFolderButton: React.FC<CreateFolderButtonProps> = () => {
export const CreateFileButton: React.FC = () => {
  const {
    modal,
    handleInputChange,
    handleCreateFile,
    objectName,
  } = useFolderSystemCreateObject('fileName', 'Nuevo archivo');

  const { isOpen, handleClose, handleClickOpen } = modal;

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Crear Registro
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
            handleCreateFile();
          }}
        >
          <DialogContent>
            <TextField
              autoFocus
              fullWidth
              id="fileName"
              margin="dense"
              name="fileName"
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
