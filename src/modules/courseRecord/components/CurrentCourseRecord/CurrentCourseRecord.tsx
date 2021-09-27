import { ReactElement } from 'react';
import { useAppSelector } from 'src/redux';
import { CurrentCourseRecordLoaded } from '../../types';

interface CurrentCourseRecordProps {
  children: (currentCourseRecord: CurrentCourseRecordLoaded) => ReactElement;
}

const CurrentCourseRecord: React.FC<CurrentCourseRecordProps> = ({
  children,
}) => {
  const {
    courseRecordReducer: { currentCourseRecord },
  } = useAppSelector((state) => state);

  return <>{currentCourseRecord.isLoaded && children(currentCourseRecord)}</>;
};

export default CurrentCourseRecord;
