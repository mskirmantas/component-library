import { createGlobalStyle } from "styled-components";
import theme, { ThemeProps } from "./theme";

const GlobalStyle = createGlobalStyle<ThemeProps>`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    &.no-scroll {
      overflow: hidden;
    }
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  div {
    font-family: "Roboto", sans-serif;
    margin: 0;
    font-style: normal;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  a {
    font-family: "Roboto", sans-serif ;
    margin: 0;
    font-style: normal;
    color: inherit;
    text-decoration: none;
  }
  .container {
    max-width: 1280px;
    width: 100%;
    padding: 0 30px;
    margin: 0 auto;
    @media (max-width: ${theme.screen.mobile}) {
      padding: 0 20px;
    }
  }
`;
export default GlobalStyle;