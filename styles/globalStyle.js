import {createGlobalStyle} from 'styled-components';
import theme from "./theme"
import mq from "../styles/breakpoints";



const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
    font-family: 'PT Sans', sans-serif;
    ${theme().fontSizes.pct['base'] && (
      `font-size: ${theme().fontSizes.pct['base']}%;`
    )}
    ${theme().fontSizes.pct['sm'] && (
      mq('sm', `
      font-size: ${theme().fontSizes.pct['sm']}%;`
      )
    )}

    ${theme().fontSizes.pct['md'] && (
      mq('md', `
        font-size: ${theme().fontSizes.pct['md']}%; 
      `)
    )}
    

  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }


  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    color: ${()=>theme().colors.dark}; 
  }
  
  p{
    font-size: 1.4rem;
  }
  h1{ font-size: ${theme().fontSizes.h['lg'] || "2.2rem"};}
  h2{ font-size: ${theme().fontSizes.h['md'] || "2.2rem"};}
  h3{ 
    font-size: ${theme().fontSizes.h['sm'] || "2.2rem"}; 
    color: #515151;
  }
  h4{ 
    font-size: ${theme().fontSizes.h['xs'] || "2.2rem"}; 
    color: #8b8b8b;
  }

h1,h2,h3,h4{
  font-weight: bold;
}

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  a {
    color: inherit;
    font-size: 1.4rem;
    text-decoration: none;
    color: ${()=>theme().colors.primary}; 
  }

  .gap > *:nth-child(2n) {
    margin: 12px 0 0 6px;
  }
  .gap > *:nth-child(2n + 1) {
    margin: 12px 6px 0 0;
  }

/////////  
//Grain
/////////

@-webkit-keyframes grain {
  0%, 100% {
    -moz-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  10% {
    -moz-transform: translate(-5%, -10%);
    -ms-transform: translate(-5%, -10%);
    -webkit-transform: translate(-5%, -10%);
    transform: translate(-5%, -10%);
  }
  20% {
    -moz-transform: translate(-15%, 5%);
    -ms-transform: translate(-15%, 5%);
    -webkit-transform: translate(-15%, 5%);
    transform: translate(-15%, 5%);
  }
  30% {
    -moz-transform: translate(7%, -10%);
    -ms-transform: translate(7%, -10%);
    -webkit-transform: translate(7%, -10%);
    transform: translate(7%, -10%);
  }
  40% {
    -moz-transform: translate(-5%, 5%);
    -ms-transform: translate(-5%, 5%);
    -webkit-transform: translate(-5%, 5%);
    transform: translate(-5%, 5%);
  }
  50% {
    -moz-transform: translate(-15%, 10%);
    -ms-transform: translate(-15%, 10%);
    -webkit-transform: translate(-15%, 10%);
    transform: translate(-15%, 10%);
  }
  60% {
    -moz-transform: translate(15%, 0%);
    -ms-transform: translate(15%, 0%);
    -webkit-transform: translate(15%, 0%);
    transform: translate(15%, 0%);
  }
  70% {
    -moz-transform: translate(0%, 15%);
    -ms-transform: translate(0%, 15%);
    -webkit-transform: translate(0%, 15%);
    transform: translate(0%, 15%);
  }
  80% {
    -moz-transform: translate(3%, 5%);
    -ms-transform: translate(3%, 5%);
    -webkit-transform: translate(3%, 5%);
    transform: translate(3%, 5%);
  }
  90% {
    -moz-transform: translate(-10%, 10%);
    -ms-transform: translate(-10%, 10%);
    -webkit-transform: translate(-10%, 10%);
    transform: translate(-10%, 10%);
  }
}
@-moz-keyframes grain {
  0%, 100% {
    -moz-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  10% {
    -moz-transform: translate(-5%, -10%);
    -ms-transform: translate(-5%, -10%);
    -webkit-transform: translate(-5%, -10%);
    transform: translate(-5%, -10%);
  }
  20% {
    -moz-transform: translate(-15%, 5%);
    -ms-transform: translate(-15%, 5%);
    -webkit-transform: translate(-15%, 5%);
    transform: translate(-15%, 5%);
  }
  30% {
    -moz-transform: translate(7%, -10%);
    -ms-transform: translate(7%, -10%);
    -webkit-transform: translate(7%, -10%);
    transform: translate(7%, -10%);
  }
  40% {
    -moz-transform: translate(-5%, 5%);
    -ms-transform: translate(-5%, 5%);
    -webkit-transform: translate(-5%, 5%);
    transform: translate(-5%, 5%);
  }
  50% {
    -moz-transform: translate(-15%, 10%);
    -ms-transform: translate(-15%, 10%);
    -webkit-transform: translate(-15%, 10%);
    transform: translate(-15%, 10%);
  }
  60% {
    -moz-transform: translate(15%, 0%);
    -ms-transform: translate(15%, 0%);
    -webkit-transform: translate(15%, 0%);
    transform: translate(15%, 0%);
  }
  70% {
    -moz-transform: translate(0%, 15%);
    -ms-transform: translate(0%, 15%);
    -webkit-transform: translate(0%, 15%);
    transform: translate(0%, 15%);
  }
  80% {
    -moz-transform: translate(3%, 5%);
    -ms-transform: translate(3%, 5%);
    -webkit-transform: translate(3%, 5%);
    transform: translate(3%, 5%);
  }
  90% {
    -moz-transform: translate(-10%, 10%);
    -ms-transform: translate(-10%, 10%);
    -webkit-transform: translate(-10%, 10%);
    transform: translate(-10%, 10%);
  }
}
@-ms-keyframes grain {
  0%, 100% {
    -moz-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  10% {
    -moz-transform: translate(-5%, -10%);
    -ms-transform: translate(-5%, -10%);
    -webkit-transform: translate(-5%, -10%);
    transform: translate(-5%, -10%);
  }
  20% {
    -moz-transform: translate(-15%, 5%);
    -ms-transform: translate(-15%, 5%);
    -webkit-transform: translate(-15%, 5%);
    transform: translate(-15%, 5%);
  }
  30% {
    -moz-transform: translate(7%, -10%);
    -ms-transform: translate(7%, -10%);
    -webkit-transform: translate(7%, -10%);
    transform: translate(7%, -10%);
  }
  40% {
    -moz-transform: translate(-5%, 5%);
    -ms-transform: translate(-5%, 5%);
    -webkit-transform: translate(-5%, 5%);
    transform: translate(-5%, 5%);
  }
  50% {
    -moz-transform: translate(-15%, 10%);
    -ms-transform: translate(-15%, 10%);
    -webkit-transform: translate(-15%, 10%);
    transform: translate(-15%, 10%);
  }
  60% {
    -moz-transform: translate(15%, 0%);
    -ms-transform: translate(15%, 0%);
    -webkit-transform: translate(15%, 0%);
    transform: translate(15%, 0%);
  }
  70% {
    -moz-transform: translate(0%, 15%);
    -ms-transform: translate(0%, 15%);
    -webkit-transform: translate(0%, 15%);
    transform: translate(0%, 15%);
  }
  80% {
    -moz-transform: translate(3%, 5%);
    -ms-transform: translate(3%, 5%);
    -webkit-transform: translate(3%, 5%);
    transform: translate(3%, 5%);
  }
  90% {
    -moz-transform: translate(-10%, 10%);
    -ms-transform: translate(-10%, 10%);
    -webkit-transform: translate(-10%, 10%);
    transform: translate(-10%, 10%);
  }
}
@keyframes grain {
  0%, 100% {
    -moz-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
  }
  10% {
    -moz-transform: translate(-5%, -10%);
    -ms-transform: translate(-5%, -10%);
    -webkit-transform: translate(-5%, -10%);
    transform: translate(-5%, -10%);
  }
  20% {
    -moz-transform: translate(-15%, 5%);
    -ms-transform: translate(-15%, 5%);
    -webkit-transform: translate(-15%, 5%);
    transform: translate(-15%, 5%);
  }
  30% {
    -moz-transform: translate(7%, -10%);
    -ms-transform: translate(7%, -10%);
    -webkit-transform: translate(7%, -10%);
    transform: translate(7%, -10%);
  }
  40% {
    -moz-transform: translate(-5%, 5%);
    -ms-transform: translate(-5%, 5%);
    -webkit-transform: translate(-5%, 5%);
    transform: translate(-5%, 5%);
  }
  50% {
    -moz-transform: translate(-15%, 10%);
    -ms-transform: translate(-15%, 10%);
    -webkit-transform: translate(-15%, 10%);
    transform: translate(-15%, 10%);
  }
  60% {
    -moz-transform: translate(15%, 0%);
    -ms-transform: translate(15%, 0%);
    -webkit-transform: translate(15%, 0%);
    transform: translate(15%, 0%);
  }
  70% {
    -moz-transform: translate(0%, 15%);
    -ms-transform: translate(0%, 15%);
    -webkit-transform: translate(0%, 15%);
    transform: translate(0%, 15%);
  }
  80% {
    -moz-transform: translate(3%, 5%);
    -ms-transform: translate(3%, 5%);
    -webkit-transform: translate(3%, 5%);
    transform: translate(3%, 5%);
  }
  90% {
    -moz-transform: translate(-10%, 10%);
    -ms-transform: translate(-10%, 10%);
    -webkit-transform: translate(-10%, 10%);
    transform: translate(-10%, 10%);
  }
}
.grain {
  position: relative;
  overflow: hidden;
}
.grain > * {
  z-index: 2;
}
.grain:after {
  -webkit-animation: grain 5s steps(10) infinite;
  -moz-animation: grain 5s steps(10) infinite;
  -ms-animation: grain 5s steps(10) infinite;
  animation: grain 5s steps(10) infinite;
  background: url("/images/noise.png");
  content: "";
  display: block;
  height: 300%;
  left: -100%;
  position: absolute;
  top: -100%;
  width: 300%;
  z-index: 9;
}







/* cyrillic-ext */
@font-face {
  font-family: 'PT Sans';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizYRExUiTo99u79D0e0ysmIAjcQ-woy.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'PT Sans';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizYRExUiTo99u79D0e0w8mIAjcQ-woy.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* latin-ext */
@font-face {
  font-family: 'PT Sans';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizYRExUiTo99u79D0e0ycmIAjcQ-woy.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'PT Sans';
  font-style: italic;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizYRExUiTo99u79D0e0x8mIAjcQ-w.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizaRExUiTo99u79D0-ExcOPIDUg-g.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizaRExUiTo99u79D0aExcOPIDUg-g.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* latin-ext */
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizaRExUiTo99u79D0yExcOPIDUg-g.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizaRExUiTo99u79D0KExcOPIDU.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* cyrillic-ext */
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizfRExUiTo99u79B_mh0OOtLR8a8zILig.woff2) format('woff2');
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}
/* cyrillic */
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizfRExUiTo99u79B_mh0OqtLR8a8zILig.woff2) format('woff2');
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
/* latin-ext */
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizfRExUiTo99u79B_mh0OCtLR8a8zILig.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/ptsans/v12/jizfRExUiTo99u79B_mh0O6tLR8a8zI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`

export default GlobalStyle