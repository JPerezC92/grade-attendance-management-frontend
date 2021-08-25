import { useForm } from '../useForm';
import type { UseModalResult } from '../useModal';
import { useModal } from '../useModal';

interface UseFolderSystemCreateObject<
  InputName = string,
  DefaultValue = string
> {
  (inputName: InputName, defaultName: DefaultValue): {
    handleInputChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    modal: UseModalResult;
    handleCreateFolder: () => void;
    handleCreateFile: () => void;
    objectName: InputName;
  };
}

export const useFolderSystemCreateObject: UseFolderSystemCreateObject = (
  inputName,
  defaultName
) => {
  const modal = useModal();
  const { handleInputChange, formValues } = useForm({
    [inputName]: defaultName,
  });

  const handleCreateFolder = () => {
    // eslint-disable-next-line no-console
    console.log(formValues[inputName]);
  };

  const handleCreateFile = () => {
    // eslint-disable-next-line no-console
    console.log(formValues[inputName]);
  };

  return {
    handleInputChange,
    handleCreateFolder,
    handleCreateFile,
    modal,
    objectName: formValues[inputName],
  };
};
