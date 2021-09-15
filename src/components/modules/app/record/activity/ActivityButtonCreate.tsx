import { Button } from '@material-ui/core';
import { useModal } from 'src/hooks';
import { ActivityDialogCreate } from './ActivityDialogCreate';

export const ActivityButtonCreate: React.FC = () => {
  const modalActivityDialogCreate = useModal();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={modalActivityDialogCreate.handleOpenModal}
      >
        Agregar Actividad
      </Button>

      {modalActivityDialogCreate.isOpen && (
        <ActivityDialogCreate
          modalActivityDialogCreate={modalActivityDialogCreate}
        />
      )}
    </>
  );
};
