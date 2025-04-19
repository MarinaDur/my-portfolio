import Link from "next/link";
import { styled } from "styled-components";

const StyledNavigationHomePage = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 100%;
  justify-content: center;
`;

const StyledNavigationItem = styled(Link)`
  color: var(--cl-primary-text-light);
  font-family: "Poiret One", sans-serif;
  font-size: 7rem;
  font-weight: 600;
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
