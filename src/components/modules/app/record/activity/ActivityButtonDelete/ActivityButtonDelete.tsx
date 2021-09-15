import { IconButton } from '@material-ui/core';
import { AiOutlineDelete } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import { Activity } from 'src/interfaces';
import { ActivityDialogDelete } from '../ActivityDialogDelete';

interface ActivityButtonDeleteProps {
  activity: Activity;
}

export const ActivityButtonDelete: React.FC<ActivityButtonDeleteProps> = ({
  activity,
}) => {
  const modalActivityDialogDelete = useModal();

  return (
    <>
      <IconButton
        color="secondary"
        onClick={modalActivityDialogDelete.handleOpenModal}
      >
        <AiOutlineDelete />
      </IconButton>

      {modalActivityDialogDelete.isOpen && (
        <ActivityDialogDelete
          activity={activity}
          modalActivityDialogDelete={modalActivityDialogDelete}
        />
      )}
    </>
  );
};
