import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@material-ui/core';
import React from 'react';
import { useFileSystemCreateObject, useForm, UseModalResult } from 'src/hooks';

interface FileSystemDialogCreateFileProps {
  useModalCreateFile: UseModalResult;
}

export const FileSystemDialogCreateFile: React.FC<FileSystemDialogCreateFileProps> = ({
  useModalCreateFile,
}) => {
  const { formValues, handleInputChange } = useForm({
    fileName: 'Nuevo registro',
  });

  const { handleCreateFile } = useFileSystemCreateObject();

  return (
    <>
      <>
        <Dialog
          open={useModalCreateFile.isOpen}
          onClose={useModalCreateFile.handleCloseModal}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Ingrese un nombre</DialogTitle>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCreateFile(formValues.fileName);
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
                value={formValues.fileName}
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={useModalCreateFile.handleCloseModal}
                color="secondary"
              >
                Cancelar
              </Button>
              <Button
                onClick={useModalCreateFile.handleCloseModal}
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
