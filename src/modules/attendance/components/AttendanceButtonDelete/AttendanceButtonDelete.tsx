import { IconButton } from '@material-ui/core';
import { AiOutlineDelete } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import { Attendance } from '../../types';
import AttendanceDialogDelete from '../AttendanceDialogDelete';

interface AttendanceButtonDeleteProps {
  attendance: Attendance;
}

const AttendanceButtonDelete: React.FC<AttendanceButtonDeleteProps> = ({
  attendance,
}) => {
  const useModalAttendanceDateDialogDelete = useModal();

  return (
    <>
      <IconButton
        color="secondary"
        onClick={useModalAttendanceDateDialogDelete.handleOpenModal}
      >
        <AiOutlineDelete />
      </IconButton>

      {useModalAttendanceDateDialogDelete.isOpen && (
        <AttendanceDialogDelete
          attendance={attendance}
          useModalAttendanceDateDialogDelete={
            useModalAttendanceDateDialogDelete
          }
        />
      )}
    </>
  );
};

export default AttendanceButtonDelete;
