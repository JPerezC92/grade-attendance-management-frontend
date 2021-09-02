import { IconButton } from '@material-ui/core';
import { AiOutlineEdit } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import { Attendance } from 'src/interfaces';
import { AttendanceDateDialogEdit } from './AttendanceDateDialogEdit';

interface AttendanceDateButtonEditProps {
  attendance: Attendance;
}

export const AttendanceDateButtonEdit: React.FC<AttendanceDateButtonEditProps> = ({
  attendance,
}) => {
  const useModalAttendanceDateDialogEdit = useModal();
  return (
    <>
      <IconButton
        color="primary"
        onClick={useModalAttendanceDateDialogEdit.handleOpenModal}
      >
        <AiOutlineEdit />
      </IconButton>

      {useModalAttendanceDateDialogEdit.isOpen && (
        <AttendanceDateDialogEdit
          attendance={attendance}
          useModalAttendanceDateDialogEdit={useModalAttendanceDateDialogEdit}
        />
      )}
    </>
  );
};
