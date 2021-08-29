import { Button } from '@material-ui/core';
import { useModal } from 'src/hooks';
import { FileSystemDialogCreateFile } from '../../FileSystem/FileSystemDialogCreateFile';
// import styles from './CreateFileButton.module.scss';

// interface CreateFolderButtonProps {}

// export const CreateFolderButton: React.FC<CreateFolderButtonProps> = () => {
export const CreateFileButton: React.FC = () => {
  const useModalCreateFile = useModal();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={useModalCreateFile.handleOpenModal}
      >
        Crear Registro
      </Button>
      {useModalCreateFile.isOpen && (
        <FileSystemDialogCreateFile useModalCreateFile={useModalCreateFile} />
      )}
    </>
  );
};
