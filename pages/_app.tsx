// React
import React from "react";

// Style
import "../styles/globals.scss";
import "instantsearch.css/themes/reset.css";
import "instantsearch.css/themes/satellite.css";

// next
import type { AppProps } from "next/app";

// source
import Layout from "../src/components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  );
}
export default MyApp;
