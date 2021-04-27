import styled from "styled-components";
import {Heading, Container} from "./../partials"

const Header = ({title}) => (
      <Container>
            <Heading pb=".5" size="xl" caps> {title} </Heading>
      </Container>
)

export default Header;
