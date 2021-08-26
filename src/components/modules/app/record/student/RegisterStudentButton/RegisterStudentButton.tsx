import { Button } from '@material-ui/core';
import { useModal } from 'src/hooks';
import { RegisterStudentForm } from '../RegisterStudentForm';
// import styles from './CreateStudentButton.module.scss';

export const RegisterStudentButton: React.FC = () => {
  const useModalRegisterStudentForm = useModal();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={useModalRegisterStudentForm.handleClickOpen}
      >
        Agregar estudiante
      </Button>

      <RegisterStudentForm
        useModalRegisterStudentForm={useModalRegisterStudentForm}
      />
    </>
  );
};
