import styled from "styled-components";
import {AspectRatio,Container, Image, Heading, Text, Link} from "./../partials"
import {motion, animatePresence} from "framer-motion"
import animation from "./../../scripts/animations"
import HeaderLogo from "./../partials/HeaderLogo"
import mq from "../../styles/breakpoints";

const ContainerMod = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({bgColor}) => (bgColor || "#333")};
    flex-wrap:wrap;
`;

const ImageWrap = styled(motion.div)`
    max-width: 300px;
    ${
        mq('md', `
            max-width: 300px;
        `)
    }
    ${ 
        mq('lg', `
            max-width: 550px;
        `)
    }
`;


const MethodDiv = styled.div`
    padding: 0 0px 30px 0px;
    text-align: center;
    
    ${
        mq('sm', `
            text-align: left;
            padding: 0 0px 0 40px;
        `)
    }

    ${ 
        mq('md', `
            padding: 0 0px 0 80px;
        `)
    }
`
const ProjectImage = styled(AspectRatio)`
    // margin-left: -30%;
    // max-width: 800px;
`

const Subtext = styled(Text)`
    opacity: .4;
    & p{
        display: inline;
    }
    &>ul li{
        display: inline;
        font-weight: bold;
    }
    &>ul li:not(:last-child):after{
        content: " | "
    }
`
const StyledText = styled(Text)`
    opacity: 0.5;
`



const Header = ({src, alt, title, subtitle, bgColor }) => (
    <motion.div initial='initial' animate='animate'>
        <motion.div variants={animation.stagger}>
            <HeaderLogo/>  
            <ContainerMod  maxWidth="100%" as="header" bgColor={bgColor}>
                <ImageWrap variants={animation.fadeRight}>
                    <Image src={src} alt={alt} width="600px" height="600px"/>
                </ImageWrap>
                <MethodDiv>
                    
                        <motion.div variants={animation.fadeUp}>
                            <Heading as="h1" size="lg" color="light" caps>{title}</Heading>
                        </motion.div>
                        
                        <motion.div variants={animation.fadeUp}>
                            <Subtext as="h2" size="xs" caps bold pb=".5">
                                <ul>
                                    {subtitle.map( ({element}, i) => (
                                        <li key={i}>{element}</li>
                                    ))}
                                </ul>
                            </Subtext>                    
                        </motion.div>
                        
                        
                </MethodDiv>
            </ContainerMod>
        </motion.div>

    </motion.div>
)

export default Header 