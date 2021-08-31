import { IconButton } from '@material-ui/core';
import { AiOutlineEdit } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import { Student } from 'src/interfaces';
import { StudentDialogEditForm } from './StudentDialogEditForm';

interface StudentEditButtonProps {
  student: Student;
}

export const StudentEditButton: React.FC<StudentEditButtonProps> = ({
  student,
}) => {
  const useModalEditStudent = useModal();
  return (
    <>
      <IconButton color="primary" onClick={useModalEditStudent.handleOpenModal}>
        <AiOutlineEdit />
      </IconButton>

      {useModalEditStudent.isOpen && (
        <StudentDialogEditForm
          student={student}
          useModalEditStudent={useModalEditStudent}
        />
      )}
    </>
  );
};
