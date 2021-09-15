import { useAppSelector } from 'src/redux';
import { AuthRoute } from 'src/routes';
import Redirect from 'src/shared/components/Redirect';

const IfUserIsAuthenticated: React.FC = ({ children }) => {
  const { isLoggedIn, user } = useAppSelector((state) => state.authReducer);

  if (!isLoggedIn || !user) return <Redirect to={AuthRoute.LOGIN} />;

  return <>{children}</>;
};
export default IfUserIsAuthenticated;
