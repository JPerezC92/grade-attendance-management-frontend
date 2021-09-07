import { useAppSelector } from 'src/redux';
import { Redirect } from 'src/components/common';
import { CourseRoute } from 'src/routes/course.routepath';

export const IfUserAuthenticatedGoToApp: React.FC = ({ children }) => {
  const { isLoggedIn, user } = useAppSelector((state) => state.authReducer);

  if (isLoggedIn && user) return <Redirect to={CourseRoute.ROOT} />;

  return <>{children}</>;
};
