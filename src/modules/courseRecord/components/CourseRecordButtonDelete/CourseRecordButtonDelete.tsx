import { IconButton } from '@material-ui/core';
import { AiOutlineDelete } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import { CourseRecord } from '../../types';
import CourseRecordDialogDelete from '../CourseRecordDialogDelete';

interface CourseRecordButtonDeleteProps {
  courseRecord: CourseRecord;
}

const CourseRecordButtonDelete: React.FC<CourseRecordButtonDeleteProps> = ({
  courseRecord,
}) => {
  const modal = useModal();

  return (
    <>
      <IconButton
        color="secondary"
        onClick={(e) => {
          e.stopPropagation();
          modal.handleOpenModal();
        }}
      >
        <AiOutlineDelete />
      </IconButton>

      {modal.isOpen && (
        <CourseRecordDialogDelete courseRecord={courseRecord} modal={modal} />
      )}
    </>
  );
};

export default CourseRecordButtonDelete;
