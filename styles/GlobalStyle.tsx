import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { useAppSelector } from '../hooks';

const StyledGlobal = createGlobalStyle<{
  isDark: boolean;
}>`
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
    word-break: keep-all;
  }

  h2,
  h3,
  h4,
  h5,
  p {
    color: ${({ isDark }) => (isDark ? 'white' : 'black')};
    transition: 0.4s;
  }
`;

const GlobalStyle = () => {
  const isDark = useAppSelector((state) => state.isDark);

  return <StyledGlobal isDark={isDark} />;
};
export default GlobalStyle;
