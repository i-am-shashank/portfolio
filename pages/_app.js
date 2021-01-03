import GlobalStyles from "../styles/globalStyles";
import Layout from "./components/Layout";
// import 'typeface-roboto-condensed';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
