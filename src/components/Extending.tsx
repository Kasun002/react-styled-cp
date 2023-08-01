import { styled } from "styled-components";

const Button = styled.button`
    color: #BF4F74;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #BF4F74;
    border-radius: 3px;
`;

const CustomButton = styled(Button)`
    color: tomato;
    border-color: tomato;
`;

const ExtendingStyles = () => {
    return (
        <div>
            <Button>General Button</Button>
            <CustomButton> Extended styled button</CustomButton>
        </div>
    )
}

export default ExtendingStyles;



