import { styled } from "styled-components";


const Wrapper = styled.div`
    padding: 4em;
    background-color: papayawhip;
`;

const Title = styled.h2`
    ont-size: 1.5em;
    text-align: center;
    color: #BF4F74;
`;

const HomePage: React.FC = () => {
    return (
        <Wrapper>
            <Title>
                Home page
            </Title>
        </Wrapper>
    )
}

export default HomePage;