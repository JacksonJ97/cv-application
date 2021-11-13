import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Nunito", sans-serif;
  }

  input {
    display: block;
    width: 100%;
    margin: 1em auto;
    padding: 0.5em;
  }
`;

export default GlobalStyle;
