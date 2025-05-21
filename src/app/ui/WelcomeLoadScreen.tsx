"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import sleep from "../frontUtils/sleepFunction";

const Overlay = styled.div<{ $visible: boolean }>`
  position: fixed;
  z-index: 9999999;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: var(--dark);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  pointer-events: none;
  transition: opacity 1s ease;

  h1 {
    color: var(--light);
    font-size: 4.5rem;
    letter-spacing: 0.15em;
    animation: fadeInUp 1.5s ease-out forwards;
  }

  .loader {
    margin-top: 2rem;
    width: 40px;
    height: 40px;
    border: 3px solid var(--light);
    border-top-color: transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function WelcomeScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const runWelcomeAnimation = async () => {
      const body = document.body;

      // Start overlay transition
      body.classList.add("page-transition");
      body.classList.add("page-content-hidden");

      await sleep(1200); // show welcome screen briefly

      body.classList.add("page-transition-start");
      await sleep(700); // match your animateOut()

      body.classList.remove("page-transition");
      body.classList.remove("page-transition-start");
      body.classList.remove("page-content-hidden");
      body.classList.add("page-content-visible");

      setShow(false);
    };

    runWelcomeAnimation();
  }, []);

  if (!show) return null;

  return (
    <Overlay $visible={show}>
      <h1>Marina Durmishov</h1>
      <div className="loader" />
    </Overlay>
  );
}
