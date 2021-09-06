import { useEffect } from 'react';
import { Backdrop, CircularProgress } from '@material-ui/core';
import { Redirect } from 'src/components/common';
import { startLoadingCourses, useAppDispatch, useAppSelector } from 'src/redux';
import { AuthRoute } from 'src/routes';

export const IfUserIsAuthenticated: React.FC = ({ children }) => {
  const { isLoggedIn, user } = useAppSelector((state) => state.authReducer);
  const { courseReducer } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoggedIn && user) dispatch(startLoadingCourses());
  }, []);

  if (!isLoggedIn || !user) return <Redirect to={AuthRoute.LOGIN} />;

  return (
    <>
      {courseReducer.isLoading && (
        <Backdrop
          open={courseReducer.isLoading}
          style={{ zIndex: 1, color: '#fff' }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      {children}
    </>
  );
};
