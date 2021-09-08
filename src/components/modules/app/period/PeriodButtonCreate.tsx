import { Button } from '@material-ui/core';
import { useModal } from 'src/hooks';
import { PeriodDialogRegister } from '.';

export const PeriodButtonCreate: React.FC = () => {
  const modalPeriodDialogRegister = useModal();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={modalPeriodDialogRegister.handleOpenModal}
      >
        Nuevo periodo
      </Button>

      {modalPeriodDialogRegister.isOpen && (
        <PeriodDialogRegister
          modalPeriodDialogRegister={modalPeriodDialogRegister}
        />
      )}
    </>
  );
};
