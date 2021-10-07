import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from 'src/redux';
import { startLoadingCourseContent } from '../../reducer';
import LoadingSpinner from 'src/shared/components/LoadingSpinner';

const LoadCurrentCourse: React.FC = ({ children }) => {
  const router = useRouter();
  const [currentCourseId, setCurrentCourseId] = useState('');
  const dispatch = useAppDispatch();
  const {
    courseReducer: { currentCourse },
  } = useAppSelector((state) => state);

  useEffect(() => {
    const courseId = parseInt(router.query.courseId as string);
    setCurrentCourseId(() => courseId.toString());

    if (
      (courseId && !currentCourse.isLoaded) ||
      (currentCourse.isLoaded && courseId !== currentCourse.id)
    ) {
      dispatch(startLoadingCourseContent(courseId));
    }
  }, [router.query]);

  if (
    !currentCourse.isLoaded ||
    (currentCourse.isLoaded && currentCourseId !== currentCourse.id.toString())
  )
    return <LoadingSpinner />;

  return <>{children}</>;
};

export default LoadCurrentCourse;
