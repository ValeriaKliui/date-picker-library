import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };
export const GlobalStyle = styled.createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }
  p {
    margin: 0;
  }
`;
