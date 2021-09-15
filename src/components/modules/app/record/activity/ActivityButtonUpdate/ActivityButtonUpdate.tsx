import { IconButton } from '@material-ui/core';
import { AiOutlineEdit } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import { Activity } from 'src/interfaces';
import { ActivityDialogEdit } from '../ActivityDialogEdit';

interface ActivityButtonUpdateProps {
  activity: Activity;
}

export const ActivityButtonUpdate: React.FC<ActivityButtonUpdateProps> = ({
  activity,
}) => {
  const modalActivityDialogEdit = useModal();
  return (
    <>
      <IconButton
        color="primary"
        onClick={modalActivityDialogEdit.handleOpenModal}
      >
        <AiOutlineEdit />
      </IconButton>

      {modalActivityDialogEdit.isOpen && (
        <ActivityDialogEdit
          activity={activity}
          modalActivityDialogEdit={modalActivityDialogEdit}
        />
      )}
    </>
  );
};
