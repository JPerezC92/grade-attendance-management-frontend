import { Fab } from '@material-ui/core';
import { VscAdd } from 'react-icons/vsc';

import { useAppDispatch, useAppSelector } from 'src/redux';
import { startLoadingPeriods } from 'src/modules/period/reducer';
import { useModal } from 'src/hooks';
import CourseRecordDialogCreate from '../CourseRecordDialogCreate';
import PeriodDialogCreate from 'src/modules/period/components/PeriodDialogCreate';

const CourseRecordButtonCreate: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    periodReducer: { periods },
  } = useAppSelector((state) => state);
  const courseRecordCreateModal = useModal();
  const periodModal = useModal();

  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        style={{ position: 'absolute', bottom: '1em', right: '1em' }}
        onClick={async () => {
          await dispatch(startLoadingPeriods());
          periodModal.handleOpenModal();
          courseRecordCreateModal.handleOpenModal();
        }}
      >
        <VscAdd style={{ fontSize: '24px' }} />
      </Fab>
      {courseRecordCreateModal.isOpen && periods.length > 0 && (
        <CourseRecordDialogCreate
          useModalCourseIdDialogCreate={courseRecordCreateModal}
        />
      )}

      {periodModal.isOpen && periods.length === 0 && (
        <PeriodDialogCreate modalPeriodDialogCreate={periodModal} />
      )}
    </>
  );
};

export default CourseRecordButtonCreate;
