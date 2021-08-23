import { Box, Button, Divider, Paper } from '@material-ui/core';
import styles from './AppNavigation.module.scss';

interface AppNavigationProps {
  className?: string;
}

export const AppNavigation: React.FC<AppNavigationProps> = ({
  className,
  children,
}) => {
  return (
    <Paper className={className}>
      <Box className={styles.appNavigationButtons}>
        <Button variant="contained" color="primary">
          Crear registro
        </Button>
        <Button variant="outlined" color="secondary">
          Crear carpeta
        </Button>
      </Box>

      <Divider />

      {children}
    </Paper>
  );
};
