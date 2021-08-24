import { Redirect } from 'src/components/common';
import { useAppSelector } from 'src/redux';
import { AuthRoute } from 'src/routes';

export const IfUserIsAuthenticated: React.FC = ({ children }) => {
  const { isLoggedIn, user } = useAppSelector((state) => state.authReducer);

  if (!isLoggedIn || !user) return <Redirect to={AuthRoute.LOGIN} />;

  return <>{children}</>;
};
