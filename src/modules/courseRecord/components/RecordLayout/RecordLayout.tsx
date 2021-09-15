import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from 'src/redux';
import { startLoadingCourseRecord } from 'src/modules/courseRecord/reducer/thunks';
import AppLayout from 'src/shared/components/AppLayout';
import RecordMenu from '../RecordMenu';

const RecordLayout: React.FC = ({ children }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { currentCourseRecord } = useAppSelector(
    (state) => state.courseRecordReducer
  );

  useEffect(() => {
    const courseRecordId = parseInt(router.query.courseRecordId as string);

    if (!currentCourseRecord && courseRecordId) {
      dispatch(startLoadingCourseRecord(courseRecordId));
    }
    // eslint-disable-next-line no-console
    console.log(router.query);
  }, [router.query]);

  if (!currentCourseRecord) {
    return null;
  }

  return <AppLayout CustomMenu={RecordMenu}>{children}</AppLayout>;
};

export default RecordLayout;
