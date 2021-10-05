import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from 'src/redux';
import LoadingSpinner from 'src/shared/components/LoadingSpinner';
import { startLoadingCourseRecord } from '../../reducer/thunks';

const LoadCourseRecord: React.FC = ({ children }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { currentCourseRecord } = useAppSelector(
    (state) => state.courseRecordReducer
  );

  useEffect(() => {
    const courseRecordId = parseInt(router.query.courseRecordId as string);

    if (
      (courseRecordId && !currentCourseRecord.isLoaded) ||
      (currentCourseRecord.isLoaded &&
        currentCourseRecord.id !== courseRecordId)
    ) {
      dispatch(startLoadingCourseRecord(courseRecordId));
    }
  }, [router.query]);

  if (!currentCourseRecord.isLoaded) return <LoadingSpinner />;

  return <>{children}</>;
};

export default LoadCourseRecord;
