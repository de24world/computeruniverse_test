// React
import React from "react";

// Style
import "../styles/globals.scss";
import "instantsearch.css/themes/reset.css";
import "instantsearch.css/themes/satellite.css";

// next
import type { AppProps } from "next/app";
import Head from "next/head";

// source

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Computeruniverse Test</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Component {...pageProps} />
    </React.Fragment>
  );
}
export default MyApp;
