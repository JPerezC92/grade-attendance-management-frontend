import { IconButton } from '@material-ui/core';
import { AiOutlineEdit } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import CourseRecordDialogUpdate from '../CourseRecordDialogUpdate';
import { CourseRecord } from '../../types';

interface CourseRecordButtonUpdateProps {
  courseRecord: CourseRecord;
}

const CourseRecordButtonUpdate: React.FC<CourseRecordButtonUpdateProps> = ({
  courseRecord,
}) => {
  const modal = useModal();

  return (
    <>
      <IconButton
        color="primary"
        onClick={(e) => {
          e.stopPropagation();
          modal.handleOpenModal();
        }}
      >
        <AiOutlineEdit />
      </IconButton>

      {modal.isOpen && (
        <CourseRecordDialogUpdate courseRecord={courseRecord} modal={modal} />
      )}
    </>
  );
};

export default CourseRecordButtonUpdate;
