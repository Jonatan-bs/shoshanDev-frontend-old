import styled from "styled-components";


const StyledBanner = styled.div`
    width: 100%;
    height: 500px;
    background: url(${ ({src}) => src });
    background-size: cover;
    background-position: center center;
    margin:  0;
`

const Banner = ({src}) => (
      <StyledBanner src={src}></StyledBanner>
)

export default Banner;
