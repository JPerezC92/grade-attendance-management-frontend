import { Button } from '@material-ui/core';
import { useModal } from 'src/hooks';
import { ActivityDialogCreate } from './ActivityDialogCreate';

export const ActivityButtonCreate: React.FC = () => {
  const useModalActivityDialogCreate = useModal();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={useModalActivityDialogCreate.handleOpenModal}
      >
        Agregar Actividad
      </Button>

      {useModalActivityDialogCreate.isOpen && (
        <ActivityDialogCreate
          useModalActivityDialogCreate={useModalActivityDialogCreate}
        />
      )}
    </>
  );
};
