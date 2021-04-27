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


`

export default GlobalStyle