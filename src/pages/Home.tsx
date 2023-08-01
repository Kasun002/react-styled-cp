import ExtendingStyles from "../components/Extending";
import General from "../components/General";
import PropsStyled from "../components/Props";

const HomePage: React.FC = () => {
    return (
        <>
            <General></General>
            <PropsStyled></PropsStyled>
            <ExtendingStyles></ExtendingStyles>
        </>
    )
}

export default HomePage;