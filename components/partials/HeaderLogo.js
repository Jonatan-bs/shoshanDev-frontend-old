import styled from "styled-components";
import { Link, Image} from "./../partials"
import mq from "../../styles/breakpoints";

const LogoWrap = styled.div`
padding: 50px;
margin: 0 auto;
max-width: 330px;
${
    mq('md', `
        max-width: 430px;
    `)
}
 
`

const Wrap = styled.div`

`

const Logo = styled(Image).attrs(({light})=>({ src:`/images/${light? "logo-light.svg":"logo.svg" }`, alt: "Shoshan Development", width: "330", height: "73" }))`
`


const HeaderLogo = ({light}) => (
    <Wrap>
        <Link href="/" width="100%">
            <LogoWrap>
                <Logo light={light}/>
            </LogoWrap>
        </Link>
    </Wrap>
)

export default HeaderLogo;
