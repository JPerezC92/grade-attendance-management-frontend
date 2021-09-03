import { Button } from '@material-ui/core';
import { useModal } from 'src/hooks';
import { StudentDialogRegister } from '../StudentDialogRegister';
// import styles from './CreateStudentButton.module.scss';

export const StudentButtonRegister: React.FC = () => {
  const useModalStudentDialogRegister = useModal();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={useModalStudentDialogRegister.handleOpenModal}
      >
        Agregar estudiante
      </Button>

      {useModalStudentDialogRegister.isOpen && (
        <StudentDialogRegister
          useModalStudentDialogRegister={useModalStudentDialogRegister}
        />
      )}
    </>
  );
};
