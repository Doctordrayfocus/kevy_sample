import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px" };
    right: ${props=> props.direction === "right" && "10px" };

    margin: auto;
    cursor: pointer;
    opacity: 0.5;
`;

const Wrapper = styled.div`
    height: 100%;

`;

const Slide = styled.div`
    width: 100vw;
    height: 100 vw;
    display: flex;
    align-items: center;
    `;
const ImgContainer = styled.div`
    flex: 1;
    height: 100%
`;
const Image = styled.img`
height: 80%
`;


const InfoContainer = styled.div`
    flex: 1;
`;


const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper>
                <Slide> 
                
                <ImgContainer>
                    <Image src= "/images/eagle-1450672.jpg"/>
                </ImgContainer>
                
                <InfoContainer></InfoContainer>
                
                </Slide>
               
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
