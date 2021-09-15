import { Button } from '@material-ui/core';
import { useModal } from 'src/hooks';
import AttendanceDialogCreate from '../AttendanceDialogCreate';

const AttendanceButtonCreate: React.FC = () => {
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
        <AttendanceDialogCreate
          useModalAttendanceDateDialogCreate={
            useModalAttendanceDateDialogCreate
          }
        />
      )}
    </>
  );
};

export default AttendanceButtonCreate;
