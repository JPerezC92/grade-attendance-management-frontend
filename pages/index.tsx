import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@material-ui/core';

import { useAppDispatch, useAppSelector } from 'src/redux';
import { AuthRoute } from 'src/routes';
import { authActions } from 'src/redux/reducers';
import { Redirect } from 'src/components/common';

export const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authReducer);

  const test = true;

  if (test) return <Redirect to={AuthRoute.LOGIN} />;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          dispatch(
            authActions.login({
              id: '3289479319832701839',
              displayName: 'Philip',
              email: 'test2@gmail.com',
            })
          )
        }
      >
        Test
      </Button>

      <pre>{JSON.stringify(user, null, 2)}</pre>

      <Link href={AuthRoute.LOGIN}>
        <a>Login</a>
      </Link>
      <Link href={AuthRoute.REGISTER}>
        <a>Register</a>
      </Link>
    </div>
  );
};

export default Home;
