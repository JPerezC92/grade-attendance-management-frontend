import { IconButton } from '@material-ui/core';
import { AiOutlineDelete } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import { Student } from '../../types';
import StudentDialogDelete from '../StudentDialogDelete';

interface StudentButtonDeleteProps {
  student: Student;
}

const StudentButtonDelete: React.FC<StudentButtonDeleteProps> = ({
  student,
}) => {
  const modalStudentDialogDelete = useModal();
  return (
    <>
      <IconButton
        color="secondary"
        onClick={modalStudentDialogDelete.handleOpenModal}
      >
        <AiOutlineDelete />
      </IconButton>

      {modalStudentDialogDelete.isOpen && (
        <StudentDialogDelete
          student={student}
          modalStudentDialogDelete={modalStudentDialogDelete}
        />
      )}
    </>
  );
};

export default StudentButtonDelete;
