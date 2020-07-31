import { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import GlobalStyles from "../styles/GlobalStyles";
import theme from "../styles/theme";

import Container from "../styles/shared/Container";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Container>
          <Component {...pageProps} />
        </Container>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
