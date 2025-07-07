"use client";

import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import sleep from "../frontUtils/sleepFunction";

// Overlay slides up off the screen
const slideUp = keyframes`
  to {
    transform: translateY(-100%);
  }
`;

// Text fades out and moves upward
const textFadeOut = keyframes`
  to {
    opacity: 0;
    /* transform: translateY(-100%); */
  }
`;

// Styled overlay that covers the full screen
const Overlay = styled.div<{ $animate: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #000;
  z-index: 999999;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translateY(0);
  animation: ${(props) => (props.$animate ? slideUp : "none")} 0.7s ease
    forwards;
  animation-delay: ${(props) => (props.$animate ? "0.3s" : "0s")};
`;

const shimmer = keyframes`
  0% {
    background-position: -200%;
  }
  100% {
    background-position: 200%;
  }
`;

const AnimatedTitle = styled.h1<{ $exit?: boolean }>`
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
  opacity: 1;
  /* transform: translateY(0); */
  transition: opacity 1s ease;
  font-weight: 300;

  background: linear-gradient(
    120deg,
    #cbcbcb 0%,
    #797879 40%,
    #555555 65%,
    #cbcbcb 100%
  );
  background-size: 300% 300%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  animation: ${shimmer} 4s linear infinite;

  ${(props) =>
    props.$exit &&
    css`
      animation: ${textFadeOut} 0.6s ease forwards;
      color: #cbcbcb;
      background: none;
      -webkit-background-clip: unset;
    `}

  & span {
    font-weight: 500;
    font-family: "Montserrat", sans-serif;
  }

  @media (min-width: 1920px) {
    font-size: 3rem;
  }
`;

export default function WelcomeScreen() {
  const [show, setShow] = useState(true);
  const [startTextExit, setStartTextExit] = useState(false);
  const [startOverlaySlide, setStartOverlaySlide] = useState(false);

  useEffect(() => {
    const runAnimation = async () => {
      await sleep(1500); // show the welcome text for a bit
      setStartTextExit(true); // trigger fade/slide on text
      await sleep(300); // short pause before overlay moves
      setStartOverlaySlide(true); // slide overlay up
      await sleep(1000); // wait for overlay to finish
      setShow(false); // completely unmount the welcome screen
    };

    runAnimation();
  }, []);

  if (!show) return null;

  return (
    <Overlay $animate={startOverlaySlide}>
      <AnimatedTitle $exit={startTextExit}>
        <span>Marina Durmishov</span> Portfolio
      </AnimatedTitle>
    </Overlay>
  );
}
