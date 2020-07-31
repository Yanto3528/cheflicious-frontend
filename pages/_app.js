import Router from "next/router";
import NProgress from "nprogress";
import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";
import "nprogress/nprogress.css";

import Container from "../styles/shared/Container";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
  const renderLayout = !router.pathname.startsWith("/sign");
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {renderLayout ? (
        <Layout>
          <Container>
            <Component {...pageProps} />
          </Container>
        </Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </ThemeProvider>
  );
}

export default MyApp;
