import { IconButton } from '@material-ui/core';
import { AiOutlineDelete } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import { Activity } from '../../types';
import ActivityDialogDelete from '../ActivityDialogDelete';

interface ActivityButtonDeleteProps {
  activity: Activity;
}

const ActivityButtonDelete: React.FC<ActivityButtonDeleteProps> = ({
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

export default ActivityButtonDelete;
