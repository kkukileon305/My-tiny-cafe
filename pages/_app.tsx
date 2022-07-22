import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store';
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>My Tiny Cafe</title>
      </Head>

      <Provider store={store}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
