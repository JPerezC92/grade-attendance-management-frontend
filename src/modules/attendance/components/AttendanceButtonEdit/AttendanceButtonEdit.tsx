import { IconButton } from '@material-ui/core';
import { AiOutlineEdit } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import { Attendance } from '../../types';
import AttendanceDialogEdit from '../AttendanceDialogEdit';

interface AttendanceButtonEditProps {
  attendance: Attendance;
}

const AttendanceButtonEdit: React.FC<AttendanceButtonEditProps> = ({
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
        <AttendanceDialogEdit
          attendance={attendance}
          useModalAttendanceDateDialogEdit={useModalAttendanceDateDialogEdit}
        />
      )}
    </>
  );
};

export default AttendanceButtonEdit;
