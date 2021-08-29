import { Button } from '@material-ui/core';
import { useModal } from 'src/hooks';
import { FileSystemDialogCreateFolder } from '../../FileSystem/FileSystemDialogCreateFolder';
// import styles from './CreateFolderButton.module.scss';

// interface CreateFolderButtonProps {}

// export const CreateFolderButton: React.FC<CreateFolderButtonProps> = () => {
export const CreateFolderButton: React.FC = () => {
  const useModalCreateFolder = useModal();

  return (
    <>
      <Button
        variant="outlined"
        color="secondary"
        onClick={useModalCreateFolder.handleOpenModal}
      >
        Crear carpeta
      </Button>

      {useModalCreateFolder.isOpen && (
        <FileSystemDialogCreateFolder
          useModalCreateFolder={useModalCreateFolder}
        />
      )}
    </>
  );
};
