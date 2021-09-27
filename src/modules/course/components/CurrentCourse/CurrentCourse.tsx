import { ReactElement } from 'react';
import { useAppSelector } from 'src/redux';
import { CurrentCourseLoaded } from '../../types';

interface CurrentCourseProps {
  children: (currentCourse: CurrentCourseLoaded) => ReactElement;
}

const CurrentCourse: React.FC<CurrentCourseProps> = ({ children }) => {
  const {
    courseReducer: { currentCourse },
  } = useAppSelector((state) => state);

  return <>{currentCourse.isLoaded && children(currentCourse)}</>;
};

export default CurrentCourse;
