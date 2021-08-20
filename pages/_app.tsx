import { useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <div id="root-app">
      <CssBaseline />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
