import styled from "styled-components";
import {motion, animatePresence} from "framer-motion"
import { getStrapiMedia, fetchAPI } from "./../../lib/api";
import {Container, Markdown, AspectRatio, Image, Heading, Text, Link, Center} from "./../partials"
import HeaderLogo from "./../partials/HeaderLogo"
import Banner from "./../page/Banner"
import mq from "../../styles/breakpoints";
import DOMPurify from 'isomorphic-dompurify';

const SmallBoxes = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;

`
const SmallBox = styled.div`
    ${
        mq('md', `
            width: 33.3%;
        `)
    }
    width: 50%;
    height: 200px;
    ${({color})=> color && "background-color:" + color};
    color: #fff;
    justify-content: center;
    display: flex;
    position: relative;
    align-items: center;
    // ${ ({bgImage}) => bgImage && "background-image: url(" + bgImage + ")"  };
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-origin: content-box;
    padding: 10px;
`

const ImageAndText = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    &.imageRight{
        flex-direction: row-reverse;
    }
    &>:nth-child(1){
        width: 100%;
        position: relative;
        margin-bottom: 25px;
    }
    &>:nth-child(2){
        width: 100%;
        position: relative;
    }

    ${
        mq('md', `
            &>:nth-child(1){
                width: 48%;
                margin-bottom: 0px;
            }
            &>:nth-child(2){
                width: 48%;
            }
        `)
    }
`

const AspectRatioMod = styled(AspectRatio)`


`
const DynamicContent = ({content}) => {
    
    return (
      content.map( (component,i) => {
        switch(component.__component){
            case("page-content.small-boxes"):
                return (
                <Container key={i} pb="2">
                    <SmallBoxes>
                        {component.smallBox.map( (box,i) => (
                            <SmallBox key={i} data-aos="fade-up" color={box.bgColor} bgImage={box.image && getStrapiMedia(box.image)}>
                                <Image src={getStrapiMedia(box.image)} layout="fill" objectFit="contain"/>
                                { box.title && !box.image && <Text bold size="md">{box.title}</Text> }
                            </SmallBox>
                        ))}
                    </SmallBoxes>
                </Container>
                )
                break
            case("page-content.banner"):
                return <Container data-aos="fade-up" key={i} pb="2"><Banner src={getStrapiMedia(component.image)}/></Container>
                break
            case("page-content.media"):
            return (
                <Center>
                            <Container data-aos="fade-up" hide={component.hideOnDevice || {}} px={component.paddingX} pb="2" style={{"maxWidth": component.maxWidth || "initial", width: component.width || "100%"} }>
                                {component.media.provider_metadata.resource_type==="video"?
                                    <video autoPlay loop muted style={{ "width": '100%', "maxWidth": component.maxWidth || "initial" }}>
                                        <source src={getStrapiMedia(component.media)} />
                                    </video>
                                :
                                    <Image 
                                        src={getStrapiMedia(component.media)} 
                                        height={component.media.height} 
                                        width={component.media.width}
                                        data-aos="fade-up"
                                    />
                                    
                                }
                            </Container>
                        </Center>        
                    )
                break
            case("page-content.heading"):
                return <Container key={i} pb=".5"><Heading align={component.align} as={component.tag || "h2"} size={component.size || "md"}>{component.heading}</Heading></Container>
                break
            case("page-content.text"):
                return (
                    <Container key={i} pb=".5">
                        <Markdown>{component.content}</Markdown>
                    </Container>
                )
                break
            case("page-content.image-and-text"):
                return (
                    <Container key={i} pb="2">
                        <ImageAndText className={component.imageRight && "imageRight" }> 
                            {component.image && (<AspectRatioMod bgColor={component.imageBG} pct={component.aspectRatio || (component.image.height/component.image.width*100)} desktop={component.cover}>
                                <Image layout="fill" objectFit={component.cover? "cover" : "contain"} src={getStrapiMedia(component.image)}/>
                            </AspectRatioMod>) }        
                            {component.text && <Markdown>{component.text}</Markdown> }

                        </ImageAndText>
                    </Container>
                )
                break

        }  
    }) 
)}

export default DynamicContent; 