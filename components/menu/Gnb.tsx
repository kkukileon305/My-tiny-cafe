import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../hooks';

export const MenuTitle = ['coffee', 'latte', 'drinks', 'desserts'];

type GnbProps = {
  curMenu: number;
  setCurMenu: Dispatch<SetStateAction<number>>;
};

const StyledGnb = styled.div<{
  curMenu: number; //
  isDark: boolean;
}>`
  ul {
    display: flex;
    border-bottom: 1px solid lightgray;
    position: relative;
    transition: 0.4s;
    background-color: ${({ isDark }) => (isDark ? '#303030' : 'white')};

    li {
      width: 25%;

      p {
        font-weight: 600;
        text-align: center;
        padding: 8px 0;
        color: ${({ isDark }) => (isDark ? '#646464' : 'lightgray')};
        transition: 0.4s;
      }

      &:nth-child(${({ curMenu }) => curMenu + 1}) {
        p {
          color: ${({ isDark }) => (isDark ? 'white' : '#222222')};
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
      background-color: ${({ isDark }) => (isDark ? 'white' : '#222222')};
      transform: translateX(${({ curMenu }) => curMenu * 100}%);
    }
  }
`;

const Gnb = ({ curMenu, setCurMenu }: GnbProps) => {
  const isDark = useAppSelector((state) => state.isDark);
  return (
    <StyledGnb curMenu={curMenu} isDark={isDark}>
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
