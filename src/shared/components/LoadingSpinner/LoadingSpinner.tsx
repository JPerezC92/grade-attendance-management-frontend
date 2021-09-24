import { Backdrop, CircularProgress } from '@material-ui/core';

const LoadingSpinner: React.FC = () => {
  return (
    <>
      <Backdrop open={true} style={{ zIndex: 1, color: '#fff' }}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default LoadingSpinner;
