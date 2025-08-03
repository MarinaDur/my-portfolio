"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";
import { startPageTransition } from "../frontUtils/startPageTransition";
import colors from "../../../styles/colors";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
}

const StyledNavigationItem = styled.a`
  color: var(--cl-primary-text-light);
  font-family: "Poiret One", sans-serif;
  font-size: 7rem;
  /* transition: all 0.8s ease-in-out; */
  cursor: pointer;

  &:hover {
    letter-spacing: 8px;
  }

  @media (min-width: 1024px) {
    font-size: clamp(10rem, 12vw, 15rem);
    line-height: 1;
  }
  @media (min-width: 1280px) {
    font-size: clamp(10rem, 13vw, 18rem);
    line-height: 1;
  }

  @media (min-width: 2800px) {
    font-size: clamp(20rem, 25vw, 30rem);
  }

  @media (min-width: 3300px) {
    font-size: clamp(23rem, 35vw, 40rem);
  }
`;

export const NavLink: React.FC<TransitionLinkProps> = ({ children, href }) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const overlayColor = href === "/about" ? colors.dark : colors.light;
    startPageTransition(overlayColor);
    router.push(href); // push immediately after adding the class
  };

  return (
    <StyledNavigationItem href={href} onClick={handleTransition}>
      {children}
    </StyledNavigationItem>
  );
};
