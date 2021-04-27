import styled from "styled-components";
import { Container, AspectRatio, Heading, Link, Image }  from "./../partials";
import { getStrapiMedia, fetchAPI } from "../../lib/api";
import mq from "../../styles/breakpoints";

const ContainerMod = styled(Container)`
    display: flex; 
    justify-content: space-between;
    flex-wrap: wrap;
`

const Gradient = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    right:0;
    background: linear-gradient(0deg , #000000e6, transparent);
`
const TextWrap = styled.div`
import mq from "../../styles/breakpoints";
    position: absolute;
    left: 0;
    color: #fff;
    z-index: 1;
    padding: 50px;
    bottom: 0;
    &>ul li{
        display: inline;
    }
    &>ul li:not(:last-child):after{
        content: " | "
    }
`

const Title = styled(Heading)`
    color: #fff;
`
const ProjectWrap = styled('div')`
    width: 100%;
    margin-bottom: 10px;
    ${mq('md', `
        width: 49.5%;
        margin-bottom: 0px;
    `)}
`
const AspectRatioMod = styled(AspectRatio)`
    .hoverTarget>div{
        transition: all .5s;
    }
    &:hover{
        .hoverTarget>div{
            transform: scale(1.07);
        }
    }
`


const Projects = ({projects}) => (
    <ContainerMod pb="2">
        {projects.map((project, i) => (
            <ProjectWrap key={i}  data-aos="fade-up">
                <Link href={"/project/" + project.slug}>
                            <AspectRatioMod gradient size="cover" bgColor={project.bgColor || "#333"} pct="80">
                                <div className="hoverTarget">
                                    <Image layout="fill" objectFit="cover" src={getStrapiMedia(project.thumbnail)}/>
                                </div>
                                
                                <TextWrap className="textWrap">
                                    <Title as="p" size="lg">{project.title}</Title>
                                    <ul>
                                        { project.subtitle.map( ({element}, i) => (
                                            <li key={i}>
                                                {element}
                                            </li>
                                        ))}
                                    </ul>
                                </TextWrap>
                                <Gradient className="gradient"/>
                            </AspectRatioMod>
                </Link>
            </ProjectWrap>

        ))}        
    </ContainerMod>
)
export default Projects 