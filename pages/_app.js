import React, { useState, useEffect } from 'react';
import {ThemeProvider} from "styled-components";
import theme from "./../styles/theme";
import GlobalStyle from "./../styles/globalStyle";
import AOS from "aos";
import "aos/dist/aos.css";
import {motion, AnimatePresence} from "framer-motion"
// import "../scss/style.scss";
import { getStrapiMedia, fetchAPI } from "../lib/api";
import App from 'next/app'
import Head from "next/head"



function MyApp({ Component, pageProps, router, error }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      // once: true,
      offset: 150,
      delay:0
    });
  }, []);

  if( error ) {
        
    return (
    <>
        <Head>
            <meta name="robots" content="noindex"/>
        </Head>
        <DefaultErrorPage statusCode={error.status || 500} />
    </>
    )
  }

    return (
      <>           
        <Head>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"></link>
          <meta charSet="UTF-8"/>
          <script type="text/javascript" src="/static/app.js"></script>
          <title>Shoshan Development</title>
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
            <AnimatePresence initial={true} exitBeforeEnter>
                <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
        </ThemeProvider>
      </>
    )
  
}
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`

    try{
      let appProps = await App.getInitialProps(appContext);
      let menus = await fetchAPI('/menus')
      appProps = {...appProps.pageProps, menus: {footerLeft: menus.footerLeft ,footerRight: menus.footerRight } }
      
      return { pageProps: appProps }
      
    } catch(error){

      return { pageProps: {appProps: {error} }}
    }
  }
  
  export default MyApp