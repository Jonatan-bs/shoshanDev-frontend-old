import styled from "styled-components";
import { Link, Section, Container, Heading, Text } from "./../partials";
import mq from "../../styles/breakpoints";

const ContainerMod = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const MethodDiv = styled.div`

    width: 80%;
    margin-bottom: 50px;
    max-width: 300px;

    ${mq('md', `
        max-width: 100%;
        width: 40%;
        margin-bottom: 0px;
    `)}
`

const Method = () => (
    <section>
        <ContainerMod pb={2}>
            <MethodDiv data-aos="fade-right">
                <Link color="dark2" hover="underline" href="/designproces">
                    <Heading className="hoverTarget" as="h3" size="md" caps>DESIGNPROCES</Heading>
                    <Text size="lg">
                        Læs om hvordan jeg finder frem til
                        det rette design til dit projekt. 
                    </Text>
                 </Link>
            </MethodDiv>
            <MethodDiv data-aos="fade-left">
                <Link color="dark2" hover="underline" href="/teknologier">
                    <Heading  className="hoverTarget" as="h3" size="md" caps>Teknologier</Heading>
                    <Text size="lg">
                        Ethvert projekt kræver et godt
                        fundament.
                        Se hvilke teknologier jeg har erfaring med. 
                    </Text>
                </Link>
            </MethodDiv>
        </ContainerMod>
    </section>
)
export default Method 