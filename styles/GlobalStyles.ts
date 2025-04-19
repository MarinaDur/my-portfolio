"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root{
    --cl-primary-text-light: #282727;
    --page-bg: #e9e2e2;
    --page-text-color: #282727;

}

  /* Modify <html> and <body> */
  html {
    font-size: 10px; /* Set the base font size */
    height: 100%; /* Ensure it takes full height */
  }

  body {
    margin: 0;
    background: var(--page-bg);
    color: var(--page-text-color);

  }

  /* Additional global styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poiret One", sans-serif;
  }


  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  main{
    display: flex;
  flex-direction: column;
 height: 100vh;
  width: 100vw; 
  }

  input{
    border: none;
    outline: none;
  }

  &::after{
    background: var(--page-text-color);
  }

  /* You can add other global styles here */
`;

export default GlobalStyles;
