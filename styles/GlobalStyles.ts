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
  background-color: #282727; 
  z-index: 999999;
  transform: translateY(0%); 
  transition: transform 0.7s ease-in-out;
  pointer-events: none;
}

body.page-transition.page-transition-start::before {
  transform: translateY(-100%); 
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
