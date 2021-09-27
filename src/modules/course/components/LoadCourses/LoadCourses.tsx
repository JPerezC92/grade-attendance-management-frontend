import { useEffect } from 'react';
import { startLoadingCourses } from 'src/modules/course/reducer';
import { useAppDispatch, useAppSelector } from 'src/redux';
import LoadingSpinner from '../../../../shared/components/LoadingSpinner';

const LoadCourses: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const { courseReducer } = useAppSelector((state) => state);

  useEffect(() => {
    if (!courseReducer.isLoaded) {
      dispatch(startLoadingCourses());
    }
  }, []);

  if (!courseReducer.isLoaded) return <LoadingSpinner />;

  return <>{children}</>;
};

export default LoadCourses;
