import { Button } from '@material-ui/core';
import { useModal } from 'src/hooks';
import { StudentDialogRegisterForm } from '../StudentDialogRegisterForm';
// import styles from './CreateStudentButton.module.scss';

export const RegisterStudentButton: React.FC = () => {
  const useModalRegisterStudentForm = useModal();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={useModalRegisterStudentForm.handleOpenModal}
      >
        Agregar estudiante
      </Button>

      {useModalRegisterStudentForm.isOpen && (
        <StudentDialogRegisterForm
          useModalRegisterStudentForm={useModalRegisterStudentForm}
        />
      )}
    </>
  );
};
