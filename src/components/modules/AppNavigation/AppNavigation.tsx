import { Box, Button, Divider, Paper } from '@material-ui/core';

interface AppNavigationProps {
  className?: string;
}

export const AppNavigation: React.FC<AppNavigationProps> = ({
  className,
  children,
}) => {
  return (
    <Paper className={className}>
      <Box
        style={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '16px',
          margin: '16px',
        }}
      >
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
