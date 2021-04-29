import styled from "styled-components";
import {Container, Text, Grid, Span, Center, Heading} from "./../../partials"

const Info = styled.div`
    padding: 50px;
    background: ${({theme}) => theme.colors.light2};
    align-self: baseline;
`

const InfoBox = ({entries}) => {
    let separateLists = [], counter = 0;

    entries.forEach( (entry,i) =>{
        let a = i+1;

        if(entries.length===a ){ 
            separateLists.push(entries.slice(counter,a))
        } 
        else if(entry.heading){
            separateLists.push(entries.slice(counter,a-1)), 
            separateLists.push(entry), 
            counter=a
        }
            
    })

   
    

    
    return (
    <Info>
        {separateLists.map((entry,i) => {
            if(entry.heading){
                return <Text  as="h3" key={i} pt=".4" bold>{entry.entry}:</Text>
            } else if( entry.length ){
                return(
                    <ul key={i}>
                        {
                            entry.map((e,i) => <li key={i}><Text>{e.entry}</Text></li>)
                        }
                    </ul>
                )
            }


        })}
    </Info>
) }
export default InfoBox
