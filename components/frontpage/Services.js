import styled from "styled-components";
import {AspectRatio, Container, Heading, Text, Image, Link} from "./../partials"
import { getStrapiMedia, fetchAPI } from "../../lib/api";
import mq from "../../styles/breakpoints";

const ServiceCard = styled.article`
    display:flex;
    width: 100%;
    flex-direction: column;
    padding:30px;
    &:hover{
        background: #f5f5f5;
        transform: translateY(-10px);
        transition: transform .2s;
    }

`
const ServiceCardWrap = styled.div`
    width: 100%;
    ${mq('sm', `
        width: 50%;
    `)}
    ${mq('md', `
        width: 30%;
    `)}
`

const Price = styled(Text)`
    margin-top:10px;
`

const ServiceGrid = styled(Container)`
    display:flex;
    flex-wrap: wrap;
    width:100%;
    justify-content: space-evenly;
`


const AspectRatioMod = styled(AspectRatio)`
    margin: 0 auto;
`


const Services = ({services}) => (
    <section>
        <ServiceGrid py={2}>
            {services && services.map((service, i) => (
                <ServiceCardWrap  key={i} data-aos="fade-up">
                    <Link href={service?.link?.full_slug ? "/" + service.link.full_slug : "#"} color="dark">
                            <ServiceCard key={i}> 
                                    {service.symbol && <Image src={getStrapiMedia(service.symbol)} width="100px" height="100px" />}
                                    <Heading center as="h4" py={.2} size="md" caps>{service.title}</Heading>
                                    {service.elements && <Text color="dark3" size="xs" mb="0" > {service.elements?.map( ({entry, bullet}, i) =>(<span key={i}>{ entry + ((service.elements.length)>i+1? ", " : "")}</span>))}</Text>}
                                    <Price bold center size="sm">{service.price}</Price>
                                    {service.subtext && <Text italic color="dark3" size="xs" center>{service.subtext}</Text>}
                            </ServiceCard>
                    </Link>
                </ServiceCardWrap>

            ))}
        </ServiceGrid>        
    </section>
)
export default Services 