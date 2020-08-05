import Router from "next/router";
import axios from "axios";
import cookie from "js-cookie";
import nextCookies from "next-cookies";
import NProgress from "nprogress";
import { SWRConfig } from "swr";
import { ThemeProvider } from "styled-components";
import RootProvider from "../context/RootContext";
import Layout from "../components/Layout";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";
import "nprogress/nprogress.css";

import Container from "../styles/shared/Container";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
if (cookie.get("token")) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${cookie.get(
    "token"
  )}`;
}

const options = {
  fetcher: (url) => axios.get(url).then((res) => res.data),
};

function MyApp({ Component, pageProps, router }) {
  const renderLayout = !router.pathname.startsWith("/sign");
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SWRConfig value={options}>
        <RootProvider>
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
  );
}

// MyApp.getInitialProps = async (ctx) => {
//   const { token } = nextCookies(ctx);
//   if (token) {
//     const res = await axios.get("/api/users/me", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     if (res.data) {
//       return { user: res.data };
//     }
//     return { user: null };
//   }
//   return { user: null };
// };

export default MyApp;
