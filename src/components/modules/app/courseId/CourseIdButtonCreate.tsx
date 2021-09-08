import { Fab } from '@material-ui/core';
import { VscAdd } from 'react-icons/vsc';
import { useModal } from 'src/hooks';
import { CourseIdDialogCreate } from '.';

export const CourseIdButtonCreate: React.FC = () => {
  const useModalCourseIdDialogCreate = useModal();

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: 'absolute', bottom: '1em', right: '1em' }}
        onClick={useModalCourseIdDialogCreate.handleOpenModal}
      >
        <VscAdd style={{ fontSize: '24px' }} />
      </Fab>
      {useModalCourseIdDialogCreate.isOpen && (
        <CourseIdDialogCreate
          useModalCourseIdDialogCreate={useModalCourseIdDialogCreate}
        />
      )}
    </>
  );
};
