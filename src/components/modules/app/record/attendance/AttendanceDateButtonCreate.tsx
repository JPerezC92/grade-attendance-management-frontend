import { Button } from '@material-ui/core';
import { useModal } from 'src/hooks';
import { AttendanceDateDialogCreate } from './AttendanceDateDialogCreate';

export const AttendanceDateButtonCreate: React.FC = () => {
  const useModalAttendanceDateDialogCreate = useModal();
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={useModalAttendanceDateDialogCreate.handleOpenModal}
      >
        Agregar Fecha
      </Button>

      {useModalAttendanceDateDialogCreate.isOpen && (
        <AttendanceDateDialogCreate
          useModalAttendanceDateDialogCreate={
            useModalAttendanceDateDialogCreate
          }
        />
      )}
    </>
  );
};
