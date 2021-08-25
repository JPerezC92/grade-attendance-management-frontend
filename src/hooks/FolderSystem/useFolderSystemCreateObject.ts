import { useState } from 'react';
import { useForm } from '../useForm';

interface UseFolderSystemCreateObject<
  InputName = string,
  DefaultValue = string
> {
  (inputName: InputName, defaultName: DefaultValue): {
    open: boolean;
    handleInputChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    handleClickOpen: () => void;
    handleClose: () => void;
    handleCreateFolder: () => void;
    handleCreateFile: () => void;
    objectName: InputName;
  };
}

export const useFolderSystemCreateObject: UseFolderSystemCreateObject = (
  inputName,
  defaultName
) => {
  const { handleInputChange, formValues } = useForm({
    [inputName]: defaultName,
  });

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCreateFolder = () => {
    // eslint-disable-next-line no-console
    console.log(formValues[inputName]);
  };

  const handleCreateFile = () => {
    // eslint-disable-next-line no-console
    console.log(formValues[inputName]);
  };

  return {
    open,
    handleInputChange,
    handleClickOpen,
    handleClose,
    handleCreateFolder,
    handleCreateFile,
    objectName: formValues[inputName],
  };
};
