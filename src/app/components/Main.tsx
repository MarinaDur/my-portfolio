"use client";

import { styled } from "styled-components";
// import StyledLayout from "./StyledLayout";
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
  min-height: 100vh;
  position: relative;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    height: 100vh;
    align-items: center;
    display: flex;
    overflow: hidden;
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
          {
            link: "https://www.linkedin.com/in/marina-durmishov-1900051b5/",
            name: "LinkedIn",
          },
          { link: "https://github.com/MarinaDur/", name: "GitHub" },
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
      {/* <StyledLayout> */}
      <Navigation navItems={navItems} color={color} />
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      {/* </StyledLayout> */}
    </StyledMain>
  );
}

export default Main;
