import CourseContainer from 'src/modules/course/components/CourseContainer';
import IfUserIsAuthenticated from 'src/modules/auth/components/IfUserIsAuthenticated';

const AppRoot: React.FC = () => {
  return (
    <>
      <IfUserIsAuthenticated>
        <CourseContainer />
      </IfUserIsAuthenticated>
    </>
  );
};

export default AppRoot;
