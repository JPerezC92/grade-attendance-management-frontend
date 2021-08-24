import { useAppSelector } from 'src/redux';
import { Redirect } from 'src/components/common';
import { AppRoute } from 'src/routes';

export const IfUserAuthenticatedGoToApp: React.FC = ({ children }) => {
  const { isLoggedIn, user } = useAppSelector((state) => state.authReducer);

  if (isLoggedIn && user) return <Redirect to={AppRoute.ROOT} />;

  return <>{children}</>;
};
