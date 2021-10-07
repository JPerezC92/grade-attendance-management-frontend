import { IconButton } from '@material-ui/core';
import { AiOutlineDelete } from 'react-icons/ai';
import { useModal } from 'src/hooks';
import { Course } from '../../types';
import CourseDialogDelete from '../CourseDialogDelete';

interface CourseButtonDeleteProps {
  course: Course;
}

const CourseButtonDelete: React.FC<CourseButtonDeleteProps> = ({ course }) => {
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

      {modal.isOpen && <CourseDialogDelete course={course} modal={modal} />}
    </>
  );
};

export default CourseButtonDelete;
