import styled from "styled-components";
import {Container, Text, Grid, Span, Center, Heading} from "./../../partials"

const Info = styled.div`
    padding: 50px;
    background: ${({theme}) => theme.colors.light2};
    align-self: baseline;
`

const InfoBox = ({entries}) => (
    <Info>
            <ul>
                {entries.map( (e,i) => !e.heading? (<li key={i}><Text>{e.entry}</Text></li>) : (<span key={i}><br/><li> <Text><Span bold>{e.entry}:</Span></Text></li></span>))}
            </ul>
    </Info>
) 
export default InfoBox
