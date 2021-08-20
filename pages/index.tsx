import Head from 'next/head';
import Link from 'next/link';
import { AuthRoute } from 'src/routes';

export const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Link href={AuthRoute.LOGIN}>
      <a>Login</a>
    </Link>
    <Link href={AuthRoute.REGISTER}>
      <a>Register</a>
    </Link>
  </div>
);

export default Home;
