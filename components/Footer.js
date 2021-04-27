import styled from "styled-components";
import { Link, Section, Container, Text, Heading, Image } from "./partials";
import mq from "../styles/breakpoints";

const ContainerMod = styled(Container)`
    display: flex; 
    flex-wrap: wrap;
    flex-direction: column-reverse;
    ${ ({theme}) =>( 
        mq('md', `
            flex-direction: unset;
        `, )
    )}
`
const ContainerMod2 = styled(Container)`
    display: flex; 
    color:#fff;
`

const Left = styled.div`
    border-top: 5px solid ${ ({theme}) => theme.colors.primary };
    border-right: none;
    padding-top: 40px;
    box-sizing: border-box;
    width: 100%;
    padding-top: 50px;
    text-align: center;

    ${ ({theme}) =>( 
        mq('md', `
            text-align: left;
            padding-top: 0px;
            border-right: 5px solid ${theme.colors.primary };
            border-top: none;
            width: 400px
        `, )
    )}

` 

const Right = styled.div`
    padding-bottom: 50px;
    width: 100%;
    display: flex;
    align-items: center; 
    text-align: center;
    
    ${mq('md', `
        text-align: left;
        padding-bottom: 0px;
        width: calc(100% - 400px);
    `)}
` 
const MenusWrap = styled.div`
        display:flex;
        width: 100%;
        justify-content: space-evenly;
        flex-wrap: wrap;
        ${mq('sm', `
            flex-wrap: nowrap;
        `)}


` 

const MenuList = styled.ul`
    width: 100%;
    &:nth-of-type(1){
        padding-bottom: 20px;
    }

    text-align: center;
    ${mq('md', `
        text-align: left;
        width: fit-content;
    `)}

`
const LogoWrap = styled.div`
    width:100%;
    max-width: 300px;
    margin: 0 auto;
    padding-bottom: 20px;

    ${mq('md', `
        margin: unset;
    `)}

`

const Footer = ({menus}) => (
    <>
        <Section dark>
            <ContainerMod>
                
                <Left>
                    <LogoWrap>
                        <Image src="/images/logo-light.svg" width="1000" height="221" mb="9" />
                    </LogoWrap>
                    <Text color="light" size="sm">
                        Søndermarksvej 114 stmf.<br/>
                        7000 Fredericia <br/><br/>

                        CVR.: 41227966<br/>
                    </Text>
                    <Text size="sm" color="primary">kontakt@shoshandev.dk</Text> 
                </Left>
                <Right>
                    <MenusWrap>
                            <MenuList>
                                <li><Heading as="h3"  color="light" caps size="sm">{menus.footerLeft?.title}</Heading></li>
                                {menus.footerLeft?.menuItem.map((menuItem,i) => (
                                    <li key={i} ><Link href={menuItem.page? "/" + menuItem.page.full_slug : menuItem.url || "#"} color="light"><Text size="sm">{menuItem.title}</Text></Link></li>
                                ))}
                            </MenuList>
                            <MenuList>
                                <li><Heading as="h3"  color="light" caps size="sm">{menus.footerRight?.title}</Heading></li>
                                {menus.footerRight?.menuItem.map((menuItem,i) => (
                                    <li key={i}><Link href={menuItem.page? "/" + menuItem.page.full_slug : menuItem.url || "#"} color="light"><Text size="sm">{menuItem.title}</Text></Link></li>
                                ))}
                            </MenuList>
                        </MenusWrap> 
                                      
                </Right>
            

                
            </ContainerMod>
        </Section>
        <div style={{"backgroundColor":"rgb(17 17 17)"}}>
            <ContainerMod2 py=".5">
                <br/>
                <Text size="xs" center width="100%">
                    Icons made by: 
                    <Link size="inherit" href="https://www.flaticon.com/authors/iconixar" title="iconixar" name="iconixar"/>  from <Link size="inherit" href="https://www.flaticon.com/" name="www.flaticon.com" title="Flaticon"/> | 
                    <Link size="inherit" href="https://www.freepik.com" name="Freepik" title="Freepik"/>  from <Link size="inherit" href="https://www.flaticon.com/" name="www.flaticon.com" title="Flaticon"/>| 
                    <Link size="inherit" href="https://www.flaticon.com/authors/srip" name="srip" title="srip"/>  from <Link size="inherit" href="https://www.flaticon.com/" name="www.flaticon.com" title="Flaticon"/>| 
                    <Link size="inherit" href="https://www.flaticon.com/authors/nhor-phai" name="Nhor Phai" title="Nhor Phai"/> from <Link size="inherit" href="https://www.flaticon.com/" name="www.flaticon.com" title="Flaticon"/>| 
                    Background vector created by <Link size="inherit" href="https://www.freepik.com/vectors/background">rawpixel.com - www.freepik.com</Link>
                    <br/>
                    <br/>
                    ©2021 Jonatan Shoshan
                </Text>
            </ContainerMod2>
        </div>
    </>
)
export default Footer 