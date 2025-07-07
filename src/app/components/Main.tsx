"use client";

import { styled } from "styled-components";
import StyledLayout from "./StyledLayout";
import Navigation from "./Navigation";
import GlobalStyles from "../../../styles/GlobalStyles";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import WelcomeScreen from "../ui/WelcomeLoadScreen";
import { startPageTransition } from "../frontUtils/startPageTransition";
import colors from "../../../styles/colors";

interface StyledMainProps {
  $backgroundColor?: string;
  $color?: string;
}

const StyledMain = styled.main<StyledMainProps>`
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* width: 100vw; */
  /* overflow: hidden; */
  /* background: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$color}; */

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
  const queryClient = new QueryClient();
  const previousPath = useRef<string | null>(null);

  // Define different nav items per route
  const navItems =
    pathname === "/"
      ? [
          { link: "https://linkedin.com", name: "LinkedIn" },
          { link: "https://github.com", name: "GitHub" },
        ]
      : [{ link: "/", name: "Home" }];

  let color = colors.dark; // default dark
  if (pathname === "/projects" || pathname === "/contact") {
    color = colors.light; // light for projects or contact
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (previousPath.current !== null && previousPath.current !== pathname) {
      startPageTransition(color);
    }

    previousPath.current = pathname;
  }, [pathname, color]);

  if (!mounted) return null;

  return (
    // <StyledMain $backgroundColor={backgroundColor} $color={color}>
    <StyledMain>
      <GlobalStyles />
      <WelcomeScreen />
      <StyledLayout>
        <Navigation navItems={navItems} color={color} />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </StyledLayout>
    </StyledMain>
  );
}

export default Main;
