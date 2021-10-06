import IfUserIsAuthenticated from 'src/modules/auth/components/IfUserIsAuthenticated';
import CourseContentContainer from 'src/modules/course/components/CourseContentContainer';

const CourseId: React.FC = () => {
  return (
    <>
      <IfUserIsAuthenticated>
        <CourseContentContainer />;
      </IfUserIsAuthenticated>
    </>
  );
};

export default CourseId;
