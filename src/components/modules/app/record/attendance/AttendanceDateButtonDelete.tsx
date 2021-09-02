import { IconButton } from '@material-ui/core';
import { AiOutlineDelete } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import { Attendance } from 'src/interfaces';
import { AttendanceDateDialogDelete } from './AttendanceDateDialogDelete';

interface AttendanceDateButtonDeleteProps {
  attendance: Attendance;
}

export const AttendanceDateButtonDelete: React.FC<AttendanceDateButtonDeleteProps> = ({
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
        <AttendanceDateDialogDelete
          attendance={attendance}
          useModalAttendanceDateDialogDelete={
            useModalAttendanceDateDialogDelete
          }
        />
      )}
    </>
  );
};
