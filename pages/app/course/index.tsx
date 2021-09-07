import { CourseContainer } from 'src/containers/app';
import { IfUserIsAuthenticated } from 'src/components/modules';

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
