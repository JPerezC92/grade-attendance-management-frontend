import { IconButton } from '@material-ui/core';
import { AiOutlineEdit } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import { Course } from 'src/interfaces';
import { CourseDialogUpdate } from '.';

export const CourseButtonUpdate: React.FC<{ course: Course }> = ({
  course,
}) => {
  const useModalCourseDialogUpdate = useModal();
  return (
    <>
      <IconButton
        color="primary"
        onClick={(e) => {
          e.stopPropagation();
          useModalCourseDialogUpdate.handleOpenModal();
        }}
      >
        <AiOutlineEdit style={{ fontSize: '24px' }} />
      </IconButton>
      {useModalCourseDialogUpdate.isOpen && (
        <CourseDialogUpdate
          useModalCourseDialogUpdate={useModalCourseDialogUpdate}
          course={course}
        />
      )}
    </>
  );
};
