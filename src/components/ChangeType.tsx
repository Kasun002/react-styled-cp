import { styled } from "styled-components";

const Button = styled.button`
  display: inline-block;
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

const ReversedButton = (props: any) => { // Custom component implementation
    return (<Button {...props} children={props.children.split('').reverse()} />)
}

const ChangeType = () => {
    return (
        <div>
            <Button>Normal Button</Button>
            <Button as="a" href="#">Link with Button styles</Button>
            <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
            <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
        </div>
    )
}

export default ChangeType;