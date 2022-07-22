import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

export const MenuTitle = ['Coffee', 'Latte', 'Drinks', 'Desserts'];

type GnbProps = {
  curMenu: number;
  setCurMenu: Dispatch<SetStateAction<number>>;
};

const StyledGnb = styled.div<{ curMenu: number }>`
  ul {
    display: flex;
    border-bottom: 1px solid lightgray;
    position: relative;

    li {
      width: 25%;

      p {
        font-weight: 600;
        text-align: center;
        padding: 8px 0;
        color: lightgray;
        transition: 0.4s;
      }

      &:nth-child(${({ curMenu }) => curMenu + 1}) {
        p {
          color: black;
        }
      }
    }

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 25%;
      height: 2px;
      transition: 0.4s;
      background-color: black;
      transform: translateX(${({ curMenu }) => curMenu * 100}%);
    }
  }
`;

const Gnb = ({ curMenu, setCurMenu }: GnbProps) => {
  return (
    <StyledGnb curMenu={curMenu}>
      <ul>
        {MenuTitle.map((e, i) => (
          <li key={i} onClick={() => setCurMenu(i)}>
            <p>{e}</p>
          </li>
        ))}
      </ul>
    </StyledGnb>
  );
};

export default Gnb;
