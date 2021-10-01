import { ReactElement } from 'react';
import { UseModalResult } from 'src/hooks';

interface WithModalProps {
  TriggerComponent: ReactElement;
  useModalResult: UseModalResult;
  Modal: ReactElement;
}

const WithModal: React.FC<WithModalProps> = ({
  TriggerComponent,
  Modal,
  useModalResult,
}) => {
  return (
    <>
      {TriggerComponent}
      {useModalResult.isOpen && Modal}
    </>
  );
};
export default WithModal;
