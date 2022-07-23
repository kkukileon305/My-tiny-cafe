import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledMenuPage = styled.main<{ isDark: boolean }>`
  height: calc(100vh - 36px);
  display: flex;
  overflow-y: hidden;

  div.left {
    width: calc(100vw - 170px);

    div.menuContainer {
      overflow-y: scroll;
      height: calc(100% - 33px);
      transition: 0.4s;
      background-color: ${({ isDark }) => (isDark ? '#303030' : 'white')};

      h2 {
        font-weight: 700;
        font-size: 30px;
        margin: 20px 30px;

        @media screen and (max-width: 350px) {
          margin: 20px 15px;
        }
      }

      & > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        padding-bottom: 80px;
      }
    }

    @media screen and (max-width: 570px) {
      width: 100vw;
    }
  }
`;

export default StyledMenuPage;
