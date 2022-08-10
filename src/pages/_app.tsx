import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Fragment } from 'react';
import { GlobalStyles } from '~/shared/styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Next Boilerplate</title>
        <link rel="shortcut icon" href="/img-512.png" />
        <link rel="apple-touch-icon" href="/img-512.png" />
        <meta
          name="description"
          content="A simple project starter to work with Typescript, ReactJs, NextJs, Styled Components and Clean Architecture with TDD "
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />;
    </Fragment>
  );
}

export default MyApp;
