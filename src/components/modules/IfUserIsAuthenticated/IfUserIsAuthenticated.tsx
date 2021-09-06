import { Backdrop, CircularProgress } from '@material-ui/core';
import { useEffect } from 'react';
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

  if (courseReducer.isLoading)
    return (
      <Backdrop open={courseReducer.isLoading}>
        <CircularProgress color="primary" />
      </Backdrop>
    );

  return <>{children}</>;
};
