import { Redirect } from 'src/components/common';
import { useAppSelector } from 'src/redux';

export const IfUserAuthenticatedGoToApp: React.FC = ({ children }) => {
  const { user } = useAppSelector((state) => state.authReducer);

  if (user) return <Redirect to="/app" />;

  return <>{children}</>;
};
