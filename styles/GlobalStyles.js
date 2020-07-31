import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.grey};
    background-color: ${({ theme }) => theme.lightgrey};
    line-height: 1.5;
  }
  h1, h2, h3, h4, h5,h6 {
    font-family: "Poppins", sans-serif;
    color: ${({ theme }) => theme.darkgrey};
  }
  a {
    text-decoration: none;
    transition: color 0.4s;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  input {
    font-family: "Poppins", sans-serif;
  }

  ul {
    list-style: none;
  }
`;
