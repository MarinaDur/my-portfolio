import Link from "next/link";
import { styled } from "styled-components";
import { startPageTransition } from "../frontUtils/startPageTransition";
import { useRouter } from "next/navigation";

interface NavItem {
  link: string;
  name: string;
}

interface NavigationProps {
  navItems: NavItem[];
  color?: string;
}
interface StyledNavigationProps {
  $color?: string;
}

const StyledNavigation = styled.nav<StyledNavigationProps>`
  color: ${(props) => props.$color || "var(--dark)"};
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 3rem 3rem 0 3rem;
  position: fixed;
  top: 0;
  z-index: 999;

  &::after {
    content: "";
    display: block;
    bottom: -2px;
    left: 0;
    position: absolute;
    width: 150px;
    height: 2px;
    transition: width 0.3s;
    background: ${(props) => props.$color || "var(--dark)"};
  }

  @media (min-width: 1024px) {
    align-self: flex-end;
    transform: rotate(-90deg);
    /* margin-bottom: 50px; */
    padding-bottom: 3px;
    padding-left: 10px;
    justify-self: normal;
    position: static;

    &::after {
      width: 250px;
    }
  }
`;

const StyledNavigationItem = styled(Link)`
  color: var(--cl-primary-text-light);
  font-family: "Montserrat", sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  position: relative;

  &:hover {
    letter-spacing: 2px;
  }

  @media (min-width: 1024px) {
    font-size: clamp(1.2rem, 1vw, 2rem);
  }
`;

function Navigation({ navItems, color }: NavigationProps) {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();

    startPageTransition("#282727");
    router.push(href);
  };
  return (
    <StyledNavigation $color={color}>
      {navItems.map((item, index) => (
        <StyledNavigationItem
          key={index}
          href={item.link}
          onClick={
            item.link === "/"
              ? (e) => handleTransition(e, item.link)
              : undefined
          }
        >
          {item.name}
        </StyledNavigationItem>
      ))}
    </StyledNavigation>
  );
}

export default Navigation;
