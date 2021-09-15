import { IconButton } from '@material-ui/core';
import { AiOutlineEdit } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import { Activity } from '../../types';
import ActivityDialogEdit from '../ActivityDialogEdit';

interface ActivityButtonUpdateProps {
  activity: Activity;
}

const ActivityButtonUpdate: React.FC<ActivityButtonUpdateProps> = ({
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

export default ActivityButtonUpdate;
