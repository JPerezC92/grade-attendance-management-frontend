import { Fab } from '@material-ui/core';
import { VscAdd } from 'react-icons/vsc';
import { useModal } from 'src/hooks';
import { CourseDialogCreate } from '.';

export const CourseButtonCreate: React.FC = () => {
  const useModalCourseDialogCreate = useModal();
  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: 'absolute', bottom: '1em', right: '1em' }}
        onClick={useModalCourseDialogCreate.handleOpenModal}
      >
        <VscAdd style={{ fontSize: '24px' }} />
      </Fab>
      {useModalCourseDialogCreate.isOpen && (
        <CourseDialogCreate
          useModalCourseDialogCreate={useModalCourseDialogCreate}
        />
      )}
    </>
  );
};
