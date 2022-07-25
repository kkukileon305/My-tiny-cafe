import { ReactNode } from 'react';
import styled from 'styled-components';
import { Color } from '../theme';

const StyledDetailPage = styled.main<{ isDark: boolean; isBig: boolean; isIce: boolean }>`
  height: calc(100vh - 40px);
  display: flex;
  overflow-y: hidden;

  div.left {
    width: calc(100vw - 200px);
    background-color: ${({ isDark }) => (isDark ? Color.darkBrown : 'white')};
    transition: 0.4s;

    @media screen and (max-width: 570px) {
      width: 100vw;
    }
    div.btnContainer {
      border-bottom: 1px solid lightgray;
      height: 50px;
      display: flex;
      align-items: center;

      svg {
        transition: 0.4s;
      }
    }

    div.detailContainer {
      height: calc(100% - 50px);
      overflow-y: auto;

      h2 {
        font-weight: 700;
        font-size: 30px;
        margin: 20px 30px;

        @media screen and (max-width: 350px) {
          margin: 20px 15px;
        }
      }

      div.item {
        div.flexContainer {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 20px;
          gap: 30px;

          @media screen and (max-width: 570px) {
            flex-direction: column;
          }

          div.dLeft {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          div.dRight {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;

            h3 {
              font-weight: 700;
              font-size: 20px;

              word-break: keep-all;
              line-height: 1.2;
            }

            p {
              max-width: 200px;
              font-weight: 600;
              color: lightgray;

              word-break: keep-all;
              line-height: 1.33;
              font-size: 14px;

              &:last-of-type {
                margin-bottom: 20px;
                color: ${({ isDark }) => (isDark ? 'white' : 'black')};
              }
            }

            @media screen and (max-width: 570px) {
              align-items: center;
              text-align: center;
            }
          }
        }

        div.options {
          position: relative;
          padding: 40px 20px;

          h3 {
            font-weight: 600;
            font-size: 18px;
          }

          form {
            h4 {
              font-weight: 600;
              margin: 40px 0;
              text-align: center;
            }

            div {
              display: flex;
              justify-content: center;
              gap: 20px;

              button {
                background-color: transparent;
                border: 1px solid transparent;
                width: 100px;
                height: 100px;
                transition: 0.3s;

                p {
                  margin-top: 4px;
                }
              }
              &.ice {
                button {
                  &:nth-child(${({ isIce }) => (isIce ? 2 : 1)}) {
                    border: 1px solid ${({ isDark }) => (isDark ? 'white' : 'black')};
                  }
                }
              }

              &.size {
                button {
                  &:nth-child(${({ isBig }) => (isBig ? 2 : 1)}) {
                    border: 1px solid ${({ isDark }) => (isDark ? 'white' : 'black')};
                  }
                }
              }
            }

            & > button {
              border: none;
              width: 100%;
              font-size: 20px;
              margin-top: 40px;
              padding: 10px 0;
              background-color: ${Color.brown};
              color: white;
            }
          }

          @media screen and (max-width: 570px) {
            text-align: center;
          }

          &::before {
            position: absolute;
            content: '';
            top: 0;
            left: 5%;
            width: 90%;
            height: 1px;
            background-color: gray;
          }
        }
      }
    }
  }
`;

export default StyledDetailPage;
