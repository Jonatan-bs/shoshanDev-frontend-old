import HeaderLogo from "./../partials/HeaderLogo"
import {AspectRatio,Logo,Vignette, Text, Grid, Container} from './../../components/partials';
import styled from "styled-components";
import {motion, AnimatePresence} from "framer-motion"
import Image from "next/image"
import animation from "./../../scripts/animations"
import { keyframes } from 'styled-components'
import mq from "../../styles/breakpoints";
import React, { useEffect } from 'react';
import animations from "./../../scripts/animations"

const Wrapper = styled(Container)`
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: 3;
    background:#fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const RoseWrap = styled(motion.div)`
    // position: absolute;
    z-index: 1;
    max-width:300px;
    padding-bottom:20px;
`
const Rose = styled(Image)`
    opacity: .7
`
const ZIndex = styled.div`
    z-index: 4;
`
const spotlightAnimation = keyframes`
    0%,100% { top: 10%; left: 10%;  }
    25% { top: 40%; left: 40%;  }
    50% { top: 10%; left: 60%;  }
    75% { top: 0%; left: 40%;  }


`
const Spotlight = styled(AspectRatio)`
    top: -10%; left: -10%;    
    width: 40%;
    background: #fff;
    z-index: 2;
    position: absolute;
    filter: blur(10px);
    opacity: .1;
    border-radius: 100%;
    animation-name: ${spotlightAnimation};
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay: 0s;
    ${mq('md', `
        filter: blur(20px);
    `)}
`

const ellipsis = keyframes`
    to {
        width: 1.25em;    
    }
`

        
const WaitText = styled(Text)`
position: relative;
&:after {
    overflow: hidden;
    position: absolute;
    left: 100%;
    display: inline-block;
    vertical-align: bottom;
    -webkit-animation: ${ellipsis} steps(4,end) 900ms infinite;      
    animation: ${ellipsis} steps(4,end) 900ms infinite;
    content: "...";
    width: 0px;
}
      
`
const LogoWrap = styled('div')`
margin-top: 30px;       
`
const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
    },
    exit: {
        opacity: 0
    }
}

const LoadingPage = () => {
    useEffect(() => {
    console.log('hello')        
    return () => {
    console.log('Goodbye')        
    // Anything in here is fired on component unmount.
        }
    }, [])
    
    return (
    
        <motion.div 
        initial="initial"      
        animate="animate"      
        exit="exit"      
        variants={animations.pageTransition}
        onAnimationComplete={animations.scrollTop}
        >
            <Wrapper maxWidth="100%">
                {/* <Vignette pct="15" z="3"/> */}
                {/* <RoseWrap>
                    <Rose width="730" height="494" src="/images/rose.jpg" priority/>
                </RoseWrap> */}
                <Image width="100" height="100" src="/images/loader.gif" priority/>
                <LogoWrap>
                    <Logo/> 
                </LogoWrap>
                {/* <WaitText color="dark" pt=".5" as="h1" size="xs" center>Vent venligst</WaitText> */}
            </Wrapper>
        </motion.div>
)}


export default LoadingPage;