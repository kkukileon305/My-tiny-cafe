import { ChangeEventHandler, Dispatch, SetStateAction, TouchEventHandler, useEffect, useRef, useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import { BiSearchAlt2 } from 'react-icons/bi';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCurMenu } from '../../slices/curMenu';
import { Color } from '../../theme';
import { Item } from '../../type';

export const MenuTitle = ['coffee', 'latte', 'drinks', 'desserts'];

type GnbProps = {
  curMenu: number;
  setSearchMode: Dispatch<SetStateAction<boolean>>;
  searchMode: boolean;
  changeHandler: ChangeEventHandler<HTMLInputElement>;
  setSearchList: Dispatch<SetStateAction<Item[]>>;
};

const StyledGnb = styled.div<{
  curMenu: number; //
  isDark: boolean;
  searchMode: boolean;
}>`
  display: flex;
  width: 200%;
  border-bottom: 1px solid lightgray;
  height: 50px;
  position: relative;
  z-index: 10;
  transition: 0.4s;
  justify-content: space-between;
  transform: translateX(${({ searchMode }) => (searchMode ? '-50%' : '0%')});
  background-color: ${({ isDark }) => (isDark ? Color.darkBrown : 'white')};

  ul {
    width: 50%;
    display: flex;
    position: relative;
    transition: 0.4s;

    li {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        font-weight: 600;
        text-align: center;
        padding: 8px 0;
        color: ${({ isDark }) => (isDark ? '#646464' : 'lightgray')};
        transition: 0.4s;
        font-size: 20px;

        @media screen and (max-width: 360px) {
          font-size: 17px;
        }
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

  & > button {
    position: absolute;
    background-color: transparent;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 10;
    transition: 0.4s;
    color: ${({ isDark }) => (isDark ? 'white' : 'black')};
    border: none;
    font-size: 20px;

    @media screen and (max-width: 360px) {
      font-size: 18px;
    }

    & > svg {
      transition: 0.4s;
    }

    &:first-of-type {
      right: calc(50% + 4px);
      top: calc(100% + 4px);
    }

    &:last-of-type {
      left: calc(50% + 4px);
      top: calc(100% + 6px);
    }
  }

  div.search {
    width: 50%;
    padding: 4px 5px;

    div {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      border: 1px solid ${({ isDark }) => (isDark ? 'white' : 'black')};
      transition: 0.4s;
      border-radius: 30px;
      overflow: hidden;
      padding: 0 6px;

      input {
        width: 90%;
        height: 90%;
        border: none;
        transition: 0.4s;
        background-color: ${({ isDark }) => (isDark ? Color.darkBrown : 'white')};
        color: ${({ isDark }) => (isDark ? 'white' : 'black')};
        font-size: 20px;
        padding-left: 4px;

        &:focus {
          outline: none;
        }
      }

      & > svg {
        transition: 0.4s;
      }
    }
  }
`;

const Gnb = ({ curMenu, setSearchMode, searchMode, changeHandler, setSearchList }: GnbProps) => {
  const isDark = useAppSelector((state) => state.isDark);
  const dispatch = useAppDispatch();

  const gnbRef = useRef<HTMLDivElement>(null);

  return (
    <StyledGnb //
      curMenu={curMenu}
      isDark={isDark}
      ref={gnbRef}
      searchMode={searchMode}
    >
      <ul>
        {MenuTitle.map((e, i) => (
          <li key={i} onClick={() => dispatch(setCurMenu(i))}>
            <p>{e}</p>
          </li>
        ))}
      </ul>
      <div className='search'>
        <div>
          <input type='text' placeholder='오늘의 커피는?' onChange={changeHandler} />
          <BiSearchAlt2 size={20} color={isDark ? 'white' : 'black'} onClick={() => console.log(2)} />
        </div>
      </div>
      <button onClick={() => setSearchMode(true)}>
        Search <BiSearchAlt2 size={20} />
      </button>

      <button
        onClick={() => {
          setSearchMode(false);
          setSearchList([]);
        }}
      >
        <AiOutlineDoubleLeft size={20} />
      </button>
    </StyledGnb>
  );
};

export default Gnb;
