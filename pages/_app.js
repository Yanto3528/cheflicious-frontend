import Router from "next/router";
import Head from "next/head";
import axios from "axios";
import NProgress from "nprogress";
import { SWRConfig } from "swr";
import { ThemeProvider } from "styled-components";
import RootProvider from "../context/RootContext";
import Layout from "../components/Layout";
import Alert from "../components/Alert";

import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";
import "nprogress/nprogress.css";

import Container from "../styles/shared/Container";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
axios.defaults.withCredentials = true;

const options = {
  fetcher: (url) => axios.get(url).then((res) => res.data),
  revalidateOnFocus: false,
  onErrorRetry: (err, key, config, revalidate, revalidateOps) => {
    revalidate = false;
  },
};

function MyApp({ Component, pageProps, router }) {
  const renderLayout = !router.pathname.startsWith("/sign");

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SWRConfig value={options}>
          <RootProvider>
            <Alert />
            {renderLayout ? (
              <Layout>
                <Container>
                  <Component {...pageProps} />
                </Container>
              </Layout>
            ) : (
              <Component {...pageProps} />
            )}
          </RootProvider>
        </SWRConfig>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
