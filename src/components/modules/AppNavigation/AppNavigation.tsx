import { Paper } from '@material-ui/core';
import { UserInfo } from '../UserInfo/UserInfo';

interface AppNavigationProps {
  className?: string;
}

export const AppNavigation: React.FC<AppNavigationProps> = ({
  className,
  children,
}) => {
  return (
    <Paper className={className}>
      <UserInfo
        user={{
          firstname: 'Jhon Doe',
          lastname: 'Test Test',
          email: 'test@email.com',
        }}
      />
      {children}
    </Paper>
  );
};
