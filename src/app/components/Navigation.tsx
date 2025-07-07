import Link from "next/link";
import { styled } from "styled-components";
import { startPageTransition } from "../frontUtils/startPageTransition";
import { useRouter } from "next/navigation";
import CopyRights from "../ui/CopyRights";
import colors from "../../../styles/colors";

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
  position: fixed;
  transform: translateX(-50%);
  top: 2rem;
  left: 50%;
  z-index: 999;
  display: flex;
  gap: 14rem;
  color: ${(props) => props.$color || "var(--dark)"};
  flex-direction: row-reverse;
  width: 90%;
  justify-content: space-between;

  @media (min-width: 1024px) {
    position: absolute;
    top: 70%;
    left: 5vw;
    transform: translateY(-50%) rotate(-90deg);
    transform-origin: left center;
    flex-direction: row;
    width: 30%;
    justify-content: flex-start;
  }
`;

const StyledNavcContainer = styled.div<StyledNavigationProps>`
  gap: 2rem;
  display: flex;
  &::after {
    content: "";
    display: block;
    bottom: 5px;
    left: 45%;
    position: absolute;
    width: 100px;
    height: 1px;
    transition: width 0.3s;
    background: ${(props) => props.$color || "var(--dark)"};
  }

  @media (min-width: 1024px) {
    gap: 2rem;
    &::after {
      width: 80px;
      bottom: 6px;
      left: 70px;
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
    font-size: clamp(1.1rem, 0.8vw, 1.8rem);
  }
`;

function Navigation({ navItems, color }: NavigationProps) {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();

    startPageTransition(colors.dark); // Use dark color for transition
    router.push(href);
  };
  return (
    <StyledNavigation $color={color}>
      <CopyRights />

      <StyledNavcContainer $color={color}>
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
      </StyledNavcContainer>
    </StyledNavigation>
  );
}

export default Navigation;
