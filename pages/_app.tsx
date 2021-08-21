import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { CssBaseline } from '@material-ui/core';
import { store } from 'src/redux';
import { authActions } from 'src/redux/reducers';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    store.dispatch(
      authActions.login({
        displayName: 'Test',
        uid: 'Test',
      })
    );
    // eslint-disable-next-line no-console
    console.log('🎊');
  }, []);

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
