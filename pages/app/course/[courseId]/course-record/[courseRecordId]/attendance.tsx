import IfUserIsAuthenticated from 'src/modules/auth/components/IfUserIsAuthenticated';
import CourseRecordAttendaceContainer from 'src/modules/attendance/components/CourseRecordAttendaceContainer';

const CourseRecordAttendace: React.FC = () => {
  return (
    <>
      <IfUserIsAuthenticated>
        <CourseRecordAttendaceContainer />
      </IfUserIsAuthenticated>
    </>
  );
};

export default CourseRecordAttendace;
