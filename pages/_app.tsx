// React
import React from "react";

// Style
import "../styles/globals.css";
import "instantsearch.css/themes/reset.css";
import "instantsearch.css/themes/satellite.css";

// next
import type { AppProps } from "next/app";
import Head from "next/head";

// material UI
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

// source
import theme from "../src/utils/theme";

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
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}
export default MyApp;
