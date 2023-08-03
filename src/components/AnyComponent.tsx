import { styled } from "styled-components";

const Link: React.FC<any> = ({ className, children }) => (
    <a className={className} href="https://google.com">
        {children}
    </a>
);

const StyledLink = styled(Link)`
    color: #BF4F74;
    font-weight: bold;
  `;

const AnyComponent = () => {
    return (
        <div>
            <Link>Unstyled, boring Link</Link>
            <br />
            <StyledLink>
                <div>Styled, exciting Link</div>
            </StyledLink>
        </div>
    )
}

export default AnyComponent;

// If we are styling custom component it should have className props exactly