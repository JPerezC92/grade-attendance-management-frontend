import { useAppSelector } from 'src/redux';
import { CourseRoute } from 'src/routes/course.routepath';
import Redirect from 'src/shared/components/Redirect';

const IfUserAuthenticatedGoToApp: React.FC = ({ children }) => {
  const { isLoggedIn, user } = useAppSelector((state) => state.authReducer);

  if (isLoggedIn && user) return <Redirect to={CourseRoute.ROOT} />;

  return <>{children}</>;
};

export default IfUserAuthenticatedGoToApp;
