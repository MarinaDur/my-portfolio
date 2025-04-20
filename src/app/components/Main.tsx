"use client";

import { styled } from "styled-components";
import StyledLayout from "./StyledLayout";
import Navigation from "./Navigation";
import GlobalStyles from "../../../styles/GlobalStyles";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  @media (min-width: 1024px) {
    height: 100vh;
    align-items: center;
    justify-content: center;
    display: flex;
    overflow: hidden;
    position: relative;
  }
`;

function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Define different nav items per route
  const navItems =
    pathname === "/"
      ? [
          { link: "https://linkedin.com", name: "LinkedIn" },
          { link: "https://github.com", name: "GitHub" },
        ]
      : [{ link: "/", name: "Home" }];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <StyledMain>
      <GlobalStyles />
      <StyledLayout>
        <Navigation navItems={navItems} />
        {children}
      </StyledLayout>
    </StyledMain>
  );
}

export default Main;
