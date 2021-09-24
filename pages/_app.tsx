import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';

import { store } from 'src/redux';
import { startLoadingUser } from 'src/modules/auth/reducer';
import LoadingSpinner from 'src/shared/components/LoadingSpinner';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    // restore user data on refresh window if authenticated
    store.dispatch(startLoadingUser()).finally(() => setIsLoading(() => false));
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div id="root-app">
      <Provider store={store}>
        <CssBaseline />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default MyApp;
