import { Paper } from '@material-ui/core';
import styles from './AppNavigation.module.scss';

interface AppNavigationProps {
  className?: string;
}

const AppNavigation: React.FC<AppNavigationProps> = ({
  className,
  children,
}) => {
  return (
    <Paper className={`${styles.appNavigation} ${className}`}>{children}</Paper>
  );
};

export default AppNavigation;
