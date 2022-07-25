import { ReactNode } from 'react';
import styled from 'styled-components';
import { Color } from '../theme';

const StyledMenuPage = styled.main<{ isDark: boolean; searchMode: boolean }>`
  height: calc(100vh - 40px);
  display: flex;
  overflow: hidden;

  div.left {
    width: calc(100vw - 200px);
    overflow-x: hidden;

    div.menuContainer {
      overflow-y: hidden;
      overflow-x: hidden;
      height: calc(100% - 50px);
      transition: 0.4s;
      background-color: ${({ isDark }) => (isDark ? Color.darkBrown : 'white')};

      & > div {
        display: flex;
        overflow-y: scroll;
        width: 200%;
        height: 100%;
        transition: 0.4s;
        transform: translateX(${({ searchMode }) => (searchMode ? '-50%' : '0%')});

        & > div {
          width: 50%;
          display: block;

          h2 {
            font-weight: 700;
            font-size: 30px;
            margin: 30px 30px;

            @media screen and (max-width: 350px) {
              margin: 30px 15px;
            }
          }

          & > ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding-bottom: 80px;
          }

          &.searchList {
            h2 {
            }
          }
        }
      }
    }

    @media screen and (max-width: 570px) {
      width: 100vw;
    }
  }
`;

export default StyledMenuPage;
