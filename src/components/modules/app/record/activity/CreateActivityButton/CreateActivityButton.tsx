import { Button } from '@material-ui/core';
import { useModal } from 'src/hooks';
import { CreateActivityForm } from '../CreateActivityForm';
// import styles from './CreateActivityButton.module.scss';

export const CreateActivityButton: React.FC = () => {
  const useModalCreateActivityForm = useModal();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={useModalCreateActivityForm.handleClickOpen}
      >
        Agregar Actividad
      </Button>

      <CreateActivityForm
        useModalCreateActivityForm={useModalCreateActivityForm}
      />
    </>
  );
};
