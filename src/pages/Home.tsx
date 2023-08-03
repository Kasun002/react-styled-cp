import ChangeType from "../components/ChangeType";
import ExtendingStyles from "../components/Extending";
import General from "../components/General";
import PropsStyled from "../components/Props";

const HomePage: React.FC = () => {
    return (
        <>
            <h3>General</h3>
            <General></General>
            <h3>With Props</h3>
            <PropsStyled></PropsStyled>
            <h3>Extending</h3>
            <ExtendingStyles></ExtendingStyles>
            <h3>Change the original type</h3>
            <ChangeType></ChangeType>
        </>
    )
}

export default HomePage;