import AnyComponent from "../components/AnyComponent";
import ChangeType from "../components/ChangeType";
import ExtendingStyles from "../components/Extending";
import General from "../components/General";
import PassProps from "../components/PassProps";
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
            <h3>Style any component</h3>
            <AnyComponent></AnyComponent>
            <h3>Pass props</h3>
            <PassProps></PassProps>
        </>
    )
}

export default HomePage;