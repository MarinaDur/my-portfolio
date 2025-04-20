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
    background: var(--light);
    color: var(--dark);

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
