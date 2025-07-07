import { styled } from "styled-components";
import { NavLink } from "./NavLink";

const StyledNavigationHomePage = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  height: 100%;
  justify-content: center;
  width: 90%;

  @media (min-width: 1024px) {
    justify-content: center;
    width: fit-content;
    align-items: flex-start;
    gap: 0;
  }
`;

function NavigationHomePage() {
  const navItems = [
    { link: "/about", name: "ABOUT", theme: "light" },
    { link: "/projects", name: "PROJECTS", theme: "dark" },
    { link: "/contact", name: "CONTACT", theme: "dark" },
  ];

  return (
    <StyledNavigationHomePage>
      {navItems.map((item, index) => (
        <NavLink key={index} href={item.link}>
          {item.name}
        </NavLink>
      ))}
    </StyledNavigationHomePage>
  );
}

export default NavigationHomePage;
