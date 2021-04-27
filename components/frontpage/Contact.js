import styled from "styled-components";
import {AspectRatio, Container, Heading, Text, Image} from "../partials"
import { getStrapiMedia, fetchAPI } from "./../../lib/api";
import mq from "../../styles/breakpoints";

const ContactCard = styled(Container)`
    width: 100%;
    padding: 50px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    background: ${ ({theme}) => theme.colors.light2};
    text-align: center;
    
    ${mq('md', `
        text-align: left;
    `)}
`

const ContactImage = styled(AspectRatio)`
    width:70%;
    margin: 0 auto;
    ${mq('md', `
        width:30%;
    `)}
`
const TextWrap = styled('div')`
    width:100%;

    ${mq('md', `
        padding-left: 50px;
        width:70%;
    `)}
`




const Contact = ({contactBox}) => (
    <section data-aos="fade-up">
        <Container pb="3">
            <ContactCard>
                <ContactImage maxWidth="400px" pct="100" circle> 
                   {contactBox?.image && <Image layout="fill" objectFit="cover" src={getStrapiMedia(contactBox.image)}/> }
                </ContactImage>
                <TextWrap>
                    <Heading as="h3"  py={0.5} size="lg">
                        {contactBox?.title}
                    </Heading>
                    <Text  size="lg" color="primary">
                        {contactBox?.subtitle}
                    </Text>
                </TextWrap>


            </ContactCard>
        </Container>
    </section>
)
export default Contact 