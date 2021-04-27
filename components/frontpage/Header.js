import styled from "styled-components";
import { keyframes } from 'styled-components'
import mq from "../../styles/breakpoints";
import {AspectRatio, Container, Text, Vignette} from "./../partials"
import {motion, animatePresence} from "framer-motion"
import animation from "./../../scripts/animations"
import Image from "next/image"

const HeaderWrap = styled(Container)`
`;
const ContainerMod = styled(Container)`
    background: #1e1e1e;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SubText = styled(Text)`
    // font-size: 2rem;
    
    

`

const LogoWrap = styled(Text)`
    max-width: 700px; 
    width:100%;
    position: relative;
    margin: 0 auto;
`


const RoseWrap = styled(motion.div)`
    position: absolute;
    z-index: 1;
`
const Rose = styled(Image)`
`
const ZIndex = styled.div`
    z-index: 4;
`
const lightLineAnimation = keyframes`
    0% { top: -80%; left: -100%;  }
    30% { top: -80%; left: 120%; }
    100% { top: -80%; left: 120%; }
`

const LightLine = styled.div`
    top: -80%; left: -40%;    
    height: 200%;
    width: 100px;
    background: #fff;
    z-index: 2;
    position: absolute;
    transform: rotate(-25deg);
    filter: blur(20px);
    opacity: .1;
    animation-name: ${lightLineAnimation};
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-delay: 0s;
    ${mq('md', `
        width: 200px;
        filter: blur(50px);
    `)}
`



const Header = ({subtext}) => (
    <motion.div initial='initial' animate='animate'>
            <HeaderWrap as="header" maxWidth="100%" py=".5" px=".5"> 
                <ContainerMod py="5" px="1"  maxWidth="100%"> 
                    <LightLine/>
                    <Vignette pct="60" z="3"/>
                    <RoseWrap>
                        <Rose width="730" height="494" src="/images/rose-black-bg.jpg" priority/>
                    </RoseWrap>
                    <ZIndex>
                        <motion.div variants={animation.stagger}>
                            <motion.div variants={animation.fadeUp}  style={{width:"100%"}}>
                                <LogoWrap as="h1">
                                    <Image width="1000" height="221" src="/images/logo-light.svg" alt="Shoshan Development" priority/>
                                </LogoWrap>
                            </motion.div>
                            <motion.div variants={animation.fadeUp}  style={{width:"100%", maxWidth:"1000px"}}>
                                <SubText as="h2" py=".5" size="md" color="dark3" italic center>{subtext} </SubText>
                            </motion.div>
                        </motion.div>
                    </ZIndex>                    
                </ContainerMod>
            </HeaderWrap>
    </motion.div>
)
export default Header 