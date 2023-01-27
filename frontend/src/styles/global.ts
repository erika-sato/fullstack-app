// CRIAÇÃO DOS ESTILOS GLOBAIS
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --primary-font: sans-serif;

    --white: #ffffff;
    --gray-100: #F6F6F6;
    --gray-300: #c4c4cc;
    --gray-400: #8d8d99;
    --gray-600: #323238;
    --gray-700: #29292e;
    --gray-800: #202024;
    --gray-900: #121214;
    --green-500: #00875f;
    --green-300: #00b37e;
    --red-500: #f75a68;
    --orange-500: #DA5415;
    --blue-700: #233040;
    --blue-800: #081f2d;
    --offwhite-300: #f4f1ed;
}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @media(min-width: 1370px) {
  html {
    font-size: 93.75%;
  }
  }
  @media(max-width: 1369px) {
    html {
      font-size: 82.5%;
    }
  }

  body {
    background: var(--offwhite-300);
    position: relative;
    font-display: swap;
  }

  body, input, textarea, button {
    font: 500 1rem var(--primary-font), sans-serif;
  }

  button {
    cursor: pointer;
    border: 0;
  }

  a {
  color: inherit;
  text-decoration: none;
  }
`;