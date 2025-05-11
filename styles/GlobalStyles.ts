"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
    --dark: #282727;
    --light: #e9e2e2;

}

  /* Modify <html> and <body> */
  html {
    font-size: 10px; /* Set the base font size */
    height: 100%; /* Ensure it takes full height */
  }

  body {
    /* margin: 0; */
    /* background: var(--dark);
    color: var(--dark); */

  }

body.page-transition::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--page-transition-color, #282727);
  z-index: 999999;
  transform: translateY(0%); 
  transition: transform 0.7s ease-in-out;
  pointer-events: none;
}

body.page-transition.page-transition-start::before {
  transform: translateY(-100%); 
}


body.page-content-hidden h1,
body.page-content-hidden h2,
body.page-content-hidden h3,
body.page-content-hidden p,
body.page-content-hidden a{
  filter: blur(10px);
  opacity: 0;
  transform: translateY(30px);
}

/* When content becomes visible */
body.page-content-visible h1,
body.page-content-visible h2,
body.page-content-visible h3,
body.page-content-visible p{
  filter: blur(0px);
  opacity: 1;
  transform: translateY(0);
    transition: filter 0.6s ease, opacity 0.6s ease, transform 0.6s ease;

}

body.page-content-visible a {
  filter: blur(0px);
  opacity: 1;
  transform: translateY(0);
  transition:
    filter 0.6s ease,
    opacity 0.6s ease,
    transform 0.6s ease,
    letter-spacing 0.7s ease-in-out; /* ✅ keep hover transition working */
}
  /* Additional global styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poiret One", sans-serif;

  }

  body.transition-active main {
  opacity: 0;
  pointer-events: none;
}

  /* body.transition-active > *:not(#overlay) {
    opacity: 0;
    pointer-events: none;
  } */


  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  main{

  }

  input, textarea, select {
    border: none;
    outline: none;
    background: none;
  }

  &::after{
    background: var(--dark);
  }

  /* You can add other global styles here */
`;

export default GlobalStyles;
