import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { startLoadingPeriods } from '../../reducer';
import LoadingSpinner from 'src/shared/components/LoadingSpinner';

const LoadPeriods: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const { periodReducer } = useAppSelector((state) => state);

  useEffect(() => {
    if (!periodReducer.isLoaded) {
      dispatch(startLoadingPeriods());
    }
  }, []);

  if (!periodReducer.isLoaded) return <LoadingSpinner />;

  return <>{children}</>;
};

export default LoadPeriods;
