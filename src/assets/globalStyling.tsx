import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}
  body, html {
    font-family: ${props => props.theme.fonts.body};
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSizes[3]+'px'};
    line-height: 1.5;
  }
  h1, h2, h3 {
    font-weight: bold;
    font-family: ${props => props.theme.fonts.heading};
  }
  h1 {
    font-size: 2em;
  }
  ul {
    margin-top: 1em;
  }
  li {
    margin-bottom: 1em;
    list-style: disc;
    list-style-position: inside;
  }
  img {
    max-width: 100%;
    max-height: 100%;
  }
  p + p {
    margin-top: 1em;
  }
  em {
    font-style: italic;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  svg {
    vertical-align: middle
  }
`