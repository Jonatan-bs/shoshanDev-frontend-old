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
import styled from "styled-components";
// import {Container, Text, Grid, Image, Heading} from './../components/partials';
import {Container, Text, Grid, Image, Heading} from './../components/partials';

const Infobar = styled.div`
    padding: 10px;
    position: fixed;
    top:0;
    left:0;
    width:100%;
    z-index: 100;
    background: #333;
    text-align: center;
    &>p{
      color: #fff;
    }
`
const InfobarMargin = styled.div`
    padding: 10px;
    opacity:0;
`


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
      {process.env.NODE_ENV==="development"&&(
        <>
          <Infobar><p>Development mode</p></Infobar>
          <InfobarMargin><p>Development mode</p></InfobarMargin>
        </>
      )}
        <Head>
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
          <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/manifest.json"/>
          <meta name="msapplication-TileColor" content="#ffffff"/>
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
          <meta name="theme-color" content="#ffffff"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <meta charSet="UTF-8"/>
          <script type="text/javascript" src="/static/app.js"></script>
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