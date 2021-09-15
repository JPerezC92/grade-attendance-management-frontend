import { Button } from '@material-ui/core';
import { useModal } from 'src/hooks';
import PeriodDialogCreate from '../PeriodDialogCreate';

const PeriodButtonCreate: React.FC = () => {
  const modalPeriodDialogCreate = useModal();

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={modalPeriodDialogCreate.handleOpenModal}
      >
        Nuevo periodo
      </Button>

      {modalPeriodDialogCreate.isOpen && (
        <PeriodDialogCreate modalPeriodDialogCreate={modalPeriodDialogCreate} />
      )}
    </>
  );
};

export default PeriodButtonCreate;
