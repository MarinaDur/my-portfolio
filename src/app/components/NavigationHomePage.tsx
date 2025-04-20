import Link from "next/link";
import { styled } from "styled-components";

const StyledNavigationHomePage = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 100%;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: flex-end;
    width: 55%;
    align-items: flex-end;
  }
`;

const StyledNavigationItem = styled(Link)`
  color: var(--cl-primary-text-light);
  font-family: "Poiret One", sans-serif;
  font-size: 7rem;
  font-weight: 600;

  @media (min-width: 1024px) {
    font-size: clamp(10rem, 10vw, 11rem);
    letter-spacing: 5px;
  }
`;

function NavigationHomePage() {
  return (
    <StyledNavigationHomePage>
      <StyledNavigationItem href="/about">ABOUT</StyledNavigationItem>
      <StyledNavigationItem href="/projects">PROJECTS</StyledNavigationItem>
      <StyledNavigationItem href="/contact">CONTACT</StyledNavigationItem>
    </StyledNavigationHomePage>
  );
}

export default NavigationHomePage;
