import { styled } from "styled-components";

const StyledCopyRights = styled.p`
  color: var(--light-dark);
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 500;

  &:hover {
    letter-spacing: 2px;
  }

  @media (min-width: 1024px) and (max-width: 1919px) {
    font-size: clamp(1.1rem, 0.8vw, 1.8rem);
  }

  @media (min-width: 1920px) {
    font-size: clamp(1.5rem, 2vw, 2rem);
  }

  @media (min-width: 2800px) {
    font-size: clamp(2rem, 3vw, 3rem);
  }
`;

function CopyRights() {
  return <StyledCopyRights>©/2025</StyledCopyRights>;
}

export default CopyRights;
