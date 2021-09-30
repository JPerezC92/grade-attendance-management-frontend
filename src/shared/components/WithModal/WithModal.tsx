import React, { ReactElement } from 'react';
import { Dialog } from '@material-ui/core';
import { useModal, UseModalResult } from 'src/hooks';

interface WithModalProps {
  ModalContent: ({ modal }: { modal: UseModalResult }) => ReactElement;
  TriggerElement: ({ modal }: { modal: UseModalResult }) => ReactElement;
}

const WithModal: React.FC<WithModalProps> = ({
  ModalContent,
  TriggerElement,
  ...rest
}) => {
  const modal = useModal();

  return (
    <>
      {TriggerElement({ modal, ...rest })}

      {modal.isOpen && (
        <Dialog
          maxWidth="sm"
          open={modal.isOpen}
          onClose={modal.handleCloseModal}
          aria-labelledby="form-dialog-title"
        >
          {ModalContent({ modal: modal })}
        </Dialog>
      )}
    </>
  );
};

export default WithModal;
