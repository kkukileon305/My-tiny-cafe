import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {

    body {

      #__next {
        width: 100vw;
        height: 100vh;
        position: relative;
      }
    }
  }

  * {
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
  }
`;
export default GlobalStyle;
