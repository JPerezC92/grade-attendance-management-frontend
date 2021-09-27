import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from 'src/redux';
import { startLoadingCourseContent } from '../../reducer';
import LoadingSpinner from 'src/shared/components/LoadingSpinner';

const LoadCurrentCourse: React.FC = ({ children }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    courseReducer: { currentCourse },
  } = useAppSelector((state) => state);

  useEffect(() => {
    const courseId = parseInt(router.query.courseId as string);

    if (courseId && !currentCourse.isLoaded) {
      dispatch(startLoadingCourseContent(courseId));
    }
  }, [router.query]);

  if (!currentCourse.isLoaded) return <LoadingSpinner />;

  return <>{children}</>;
};

export default LoadCurrentCourse;
