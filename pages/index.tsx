import { Button } from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import { useAppDispatch, useAppSelector } from 'src/redux';
import { authActions } from 'src/redux/reducers';
import { AuthRoute } from 'src/routes';

export const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.authReducer);
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
              displayName: 'Philip',
              uid: '32894793198327018391',
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
