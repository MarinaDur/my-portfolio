import Link from "next/link";
import { styled } from "styled-components";

interface NavItem {
  link: string;
  name: string;
}

interface NavigationProps {
  navItems: NavItem[];
}

const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 3rem 3rem 0 3rem;
  position: relative;

  &::after {
    content: "";
    display: block;
    bottom: -2px;
    left: 0;
    position: absolute;
    width: 50%;
    height: 2px;
    transition: width 0.3s;
  }

  @media (min-width: 1024px) {
    align-self: flex-end;
    transform: rotate(-90deg);
    /* margin-bottom: 50px; */
    padding-bottom: 3px;
    padding-left: 10px;
    justify-self: normal;

    &::after {
      width: 190px;
    }
  }
`;

const StyledNavigationItem = styled(Link)`
  /* color: var(--cl-primary-text-light); */
  font-family: "Genos", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
`;

function Navigation({ navItems }: NavigationProps) {
  return (
    <StyledNavigation>
      {navItems.map((item, index) => (
        <StyledNavigationItem key={index} href={item.link}>
          {item.name}
        </StyledNavigationItem>
      ))}
    </StyledNavigation>
  );
}

export default Navigation;
