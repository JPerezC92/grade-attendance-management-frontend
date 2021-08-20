import { Box } from '@material-ui/core';

export const FormTip: React.FC = ({ children }) => {
  return (
    <Box component="div" textAlign="center">
      {children}
    </Box>
  );
};
