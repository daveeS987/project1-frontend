import React from 'react';
import Head from 'next/head';

import Header from './Header.js';
import HeaderCategory from './HeaderCategories.js';
import Footer from './Footer.js';

import { ThemeProvider } from '@material-ui/styles';
import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#079b74',
    },
    text: {
      // primary: '#05a77e',
      primary: '#00A87E',
      // secondary: '#616161',
      secondary: '#333333',
    },
  },
});

function Layout({ children, categories }) {
  return (
    <>
      <Head>
        <title>Offer Up Clone</title>
        <meta
          name="Name of Project Goes Here"
          content="An offerup clone built with nextjs, material ui, redux toolkit, with a nodejs/express backend performing crud operations to a mongodb"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Header />
        <HeaderCategory categories={categories} />

        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default Layout;
