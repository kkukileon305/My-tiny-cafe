import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Color } from '../theme';
import Image from 'next/image';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { removeItem } from '../slices/cartList';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const StyledAside = styled.aside<{ isDark: boolean }>`
  width: 200px;
  height: 100%;
  background-color: ${Color.brown};
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (max-width: 570px) {
    display: none;
  }

  h2 {
    font-weight: 700;
    color: white;
    font-size: 30px;
  }

  div.listContainer {
    height: 100%;
    overflow-y: auto;

    ul {
      transition: 0.4s;
      overflow-x: hidden;

      li {
        display: flex;
        position: relative;
        gap: 10px;
        margin: 20px 0;
        padding: 10px 0;
        justify-content: flex-start;
        align-items: center;
        transition: 0.4s;
        border-radius: 10px;
        transform: translateX(0px);
        opacity: 1;
        background-color: ${({ isDark }) => (isDark ? Color.darkBrown : Color.softBrown)};

        div.right {
          padding: 10px;
          h4 {
            font-weight: 600;
            font-size: 16px;
            line-height: 1.2;
            margin-bottom: 10px;
          }

          div.dOptions {
            display: flex;
            gap: 10px;

            p {
              font-weight: 600;
              color: lightgray;
            }
          }
        }

        &:first-of-type {
          margin-top: 0;
        }

        &:last-of-type {
          margin-bottom: 0;
        }

        & > button {
          position: absolute;
          right: 10px;
          bottom: 0;
          border: none;
          background-color: transparent;
          border-radius: 30px;
          height: 38px;
          transition: all 0.4s;
        }

        &.remove {
          transform: translateX(100px);
          opacity: 0;
        }
      }
    }
  }

  & > div {
    & > p {
      font-weight: 700;
      font-size: 20px;
      text-align: right;
      color: white;
      display: flex;
      justify-content: space-between;

      &:last-of-type {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
      }
    }
  }

  & > button {
    border: none;
    background-color: ${Color.softBrown};
    color: white;
    font-weight: 500;
    padding: 10px;
    font-size: 18px;
    border-radius: 8px;
    transition: 0.4s;

    &.loading {
      color: ${Color.brown};
    }
  }
`;

const Aside = () => {
  const dispatch = useAppDispatch();
  const { cartList, isDark, isTakeout } = useAppSelector((state) => state);
  const [totalPrice, setTotalPrice] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setTotalPrice(
      cartList.reduce((acc, cur) => {
        let optionPrice: number = cur.item.price;

        cur.isIce && (optionPrice += 500);
        cur.isSizeUp && (optionPrice += 1500);

        return acc + optionPrice;
      }, 0)
    );
  }, [cartList.length]);

  const removeHandler = (i: number) => {
    setTimeout(() => dispatch(removeItem(i)), 400);
  };

  return (
    <StyledAside isDark={isDark}>
      <h2>Cart</h2>

      <div className='listContainer'>
        <ul>
          {cartList.map((e, i) => (
            <li key={i}>
              <div className='right'>
                <h4>{e.item.krName}</h4>
                <div className='dOptions'>
                  <p>{e.isIce ? 'Ice' : 'Hot'}</p>
                  <p>{e.isSizeUp ? 'Big' : 'Tall'}</p>
                </div>
              </div>
              <button
                onClick={(ev) => {
                  removeHandler(i);
                  const liElement = (ev.target as HTMLElement).closest('div.listContainer > ul > li');
                  if (liElement) {
                    liElement.classList.add('remove');
                    (liElement as HTMLElement).style.transition = '0.4s';
                    setTimeout(() => {
                      (liElement as HTMLElement).style.transition = '0s';
                      liElement.classList.remove('remove');
                    }, 400);
                  }
                }}
              >
                <AiOutlineSwapRight //
                  color={isDark ? 'white' : 'black'}
                  size={24}
                  style={{ transition: '0.4s' }}
                />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>
          Total Cost <span>{totalPrice}</span>
        </p>
        <p>{isTakeout ? 'Take out' : 'Eat in'}</p>
      </div>
      <button
        onClick={(e) => {
          e.currentTarget.classList.add('loading');
          setTimeout(() => router.push('/payment'), 1000);
        }}
      >
        결제하기
      </button>
    </StyledAside>
  );
};

export default Aside;
