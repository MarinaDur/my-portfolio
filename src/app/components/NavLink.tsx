"use client";

import { useRouter } from "next/navigation";
import styled from "styled-components";
import { startPageTransition } from "../frontUtils/startPageTransition";

interface TransitionLinkProps {
  href: string;
  children: React.ReactNode;
}

const StyledNavigationItem = styled.a`
  color: var(--cl-primary-text-light);
  font-family: "Poiret One", sans-serif;
  /* font-family: qara, sans-serif; */
  /* font-family: "Cormorant Infant", serif; */
  font-size: 7rem;
  /* transition: all 0.8s ease-in-out; */
  cursor: pointer;

  &:hover {
    letter-spacing: 4px;
  }

  @media (min-width: 1024px) {
    font-size: clamp(10rem, 12vw, 15rem);
    line-height: 1;
  }
  @media (min-width: 1280px) {
    font-size: clamp(10rem, 13vw, 18rem);
    line-height: 1;
  }
`;

export const NavLink: React.FC<TransitionLinkProps> = ({ children, href }) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const overlayColor = href === "/about" ? "#282727" : "#e9e2e2";
    startPageTransition(overlayColor);
    router.push(href); // push immediately after adding the class
 
  };

  return (
    <StyledNavigationItem href={href} onClick={handleTransition}>
      {children}
    </StyledNavigationItem>
  );
};
