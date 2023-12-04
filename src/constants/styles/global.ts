import { createGlobalStyle } from 'styled-components';
import OpenSansWoff from '../../assets/fonts/open-sans/OpenSans-Regular.woff';

const styled = { createGlobalStyle };
export const GlobalStyle = styled.createGlobalStyle`
  @font-face {
    font-family: 'Open-sans';
    src: url(${OpenSansWoff}) format('woff');
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Open-sans';
  }
  p {
    margin: 0;
  }
`;
