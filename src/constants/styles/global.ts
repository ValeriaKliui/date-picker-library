import { createGlobalStyle, styled } from "styled-components";
import { transitionAnimaton } from "./animation";

const styledS = { createGlobalStyle };
export const GlobalStyle = styledS.createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: "Open Sans", sans-serif;
  }
  p {
    margin: 0;
  }
`;

export const IconStyled = styled.svg`
  ${transitionAnimaton};
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    opacity: 0.6;
  }
`;
