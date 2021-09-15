import { Box } from '@material-ui/core';

const FormTip: React.FC = ({ children }) => {
  return (
    <Box component="div" textAlign="center">
      {children}
    </Box>
  );
};

export default FormTip;
