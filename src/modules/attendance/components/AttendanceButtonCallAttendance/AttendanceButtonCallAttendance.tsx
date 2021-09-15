import { Button } from '@material-ui/core';
import { useModal } from 'src/hooks';
import { AttendanceDialogCallAttendance } from '../AttendanceDialogCallAttendance';

const AttendanceButtonCallAttendance: React.FC = () => {
  const useModalAttendanceDialogCallAttendance = useModal();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={useModalAttendanceDialogCallAttendance.handleOpenModal}
      >
        Llamar asistencia
      </Button>

      {useModalAttendanceDialogCallAttendance.isOpen && (
        <AttendanceDialogCallAttendance
          useModalAttendanceDialogCallAttendance={
            useModalAttendanceDialogCallAttendance
          }
        />
      )}
    </>
  );
};

export default AttendanceButtonCallAttendance;
