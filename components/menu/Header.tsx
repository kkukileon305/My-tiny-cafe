import styled from 'styled-components';
import { Color } from '../../theme';
import { MdHome } from 'react-icons/md';
import { FiCoffee } from 'react-icons/fi';
import { Dispatch, SetStateAction } from 'react';
import { useAppDispatch } from '../../hooks';
import { removeItemAll } from '../../slices/cartList';
import { useRouter } from 'next/router';

type HeaderProps = {
  curMenu: number;
  setCurMenu: Dispatch<SetStateAction<number>>;
};

const StyledHeader = styled.header<{ curMenu: number }>`
  div {
    height: 36px;

    &.top {
      background-color: ${Color.brown};
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;

      h2 {
        color: white;
        font-weight: 700;
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }

    &.bottom {
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
    }
  }
`;

const MenuTitle = ['Coffee', 'Latte', 'Drinks', 'Desserts'];

const Header = ({ curMenu, setCurMenu }: HeaderProps) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <StyledHeader curMenu={curMenu}>
      <div className='top'>
        <h2>
          My Tiny Cafe <FiCoffee />
        </h2>
        <MdHome
          size={30}
          color='white' //
          onClick={() => {
            dispatch(removeItemAll());
            router.push('/');
          }}
        />
      </div>
      <div className='bottom'>
        <ul>
          {MenuTitle.map((e, i) => (
            <li key={i} onClick={() => setCurMenu(i)}>
              <p>{e}</p>
            </li>
          ))}
        </ul>
      </div>
    </StyledHeader>
  );
};

export default Header;
