import { Button } from '@material-ui/core';
import { useModal } from 'src/hooks';
import StudentDialogRegister from '../StudentDialogRegister';

const StudentButtonRegister: React.FC = () => {
  const useModalStudentDialogRegister = useModal();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={useModalStudentDialogRegister.handleOpenModal}
      >
        Agregar
      </Button>

      {useModalStudentDialogRegister.isOpen && (
        <StudentDialogRegister
          useModalStudentDialogRegister={useModalStudentDialogRegister}
        />
      )}
    </>
  );
};

export default StudentButtonRegister;
