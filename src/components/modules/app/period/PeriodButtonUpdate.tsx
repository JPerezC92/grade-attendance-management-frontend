import { IconButton } from '@material-ui/core';
import { AiOutlineEdit } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import { Period } from 'src/interfaces';
import { PeriodDialogUpdate } from './PeriodDialogUpdate';

export const PeriodButtonUpdate: React.FC<{ period: Period }> = ({
  period,
}) => {
  const modalPeriodDialogUpdate = useModal();

  return (
    <>
      <IconButton
        color="primary"
        onClick={(e) => {
          e.stopPropagation();
          modalPeriodDialogUpdate.handleOpenModal();
        }}
      >
        <AiOutlineEdit style={{ fontSize: '24px' }} />
      </IconButton>
      {modalPeriodDialogUpdate.isOpen && (
        <PeriodDialogUpdate
          modalPeriodDialogUpdate={modalPeriodDialogUpdate}
          period={period}
        />
      )}
    </>
  );
};
