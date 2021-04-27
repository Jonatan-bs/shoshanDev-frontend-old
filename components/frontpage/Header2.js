import styled from "styled-components";
import mq from "../../styles/breakpoints";
import {AspectRatio, Container, Text} from "./../partials"
import {motion, animatePresence} from "framer-motion"
import animation from "./../../scripts/animations"
import Image from "next/image"

const HeaderWrap = styled.header`
    background: ${ ({theme}) => theme.colors.primary };
    padding: 50px 0;
    
    ${mq('sm', `
        padding: 0;
    `)}
`;
const ContainerMod = styled(Container)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${ ({theme}) => theme.colors.primary };
`;

const SubText = styled(Text)`
    font-size: 2rem;
    
    

`

const LogoWrap = styled(Text)`
    max-width: 1000px; 
    width:100%;
    position: relative
`



const Rose = styled(Image)`
`


const Header = ({subtext}) => (
    <motion.div initial='initial' animate='animate'>
            <HeaderWrap> 
                <ContainerMod py="1"> 
                    <motion.div variants={animation.fade}  >
                        <Rose width="730" height="494" src="/images/rose-red-bg.jpg" priority/>
                    </motion.div>
                    <motion.div variants={animation.stagger}>
                        <motion.div variants={animation.fadeUp}  style={{width:"100%"}}>
                            <LogoWrap>
                                <Image width="1000" height="221" src="/images/logo-light.svg" alt="Shoshan Development" priority/>
                            </LogoWrap>
                        </motion.div>
                        <motion.div variants={animation.fadeUp}  style={{width:"100%", maxWidth:"1000px"}}>
                            <SubText as="h2" py=".5" color="primaryDark" center>{subtext} </SubText>
                        </motion.div>
                    </motion.div>
                </ContainerMod>
            </HeaderWrap>
    </motion.div>
)
export default Header 