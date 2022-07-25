import { Dispatch, SetStateAction, TouchEventHandler, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { VscTriangleUp } from 'react-icons/vsc';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Color } from '../../theme';
import Message from '../Message';
import Image from 'next/image';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { removeItem } from '../../slices/cartList';
import { BsChevronDoubleUp } from 'react-icons/bs';
import { useRouter } from 'next/router';

const StyledMCart = styled.div<{ isDark: boolean; open: boolean }>`
  display: none;

  @media screen and (max-width: 570px) {
    display: block;
    position: fixed;
    width: 98vw;
    height: calc(100vh - 60px);
    left: 1vw;
    bottom: 0px;
    background-color: ${({ isDark }) => (isDark ? Color.darkBrown : 'white')};
    z-index: 9999;
    border-radius: 10px;
    border: 1px solid ${({ isDark }) => (isDark ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0)')};
    box-shadow: ${({ isDark }) => (isDark ? '' : '0 0 4px 4px rgba(0,0,0,0.1)')};
    transform: translateY(93%);
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: 0.4s;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
    margin-top: 10px;
  }

  & > svg {
    position: absolute;
    left: calc(50% - 15px);
    top: 4px;
    transition: 0.4s;
    transform: rotate(${({ open }) => (open ? '180deg' : '0')});
  }

  div.cartListContainer {
    height: 100%;
    overflow-y: auto;

    ul {
      transition: 0.4s;
      background-color: ${({ isDark }) => (isDark ? Color.darkBrown : 'white')};
      padding: 10px;
      overflow-x: hidden;
      padding: 0;

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
        background-color: ${({ isDark }) => (isDark ? Color.brown : 'white')};

        div.right {
          width: calc(100% - 100px);

          h4 {
            font-weight: 600;
            font-size: 18px;
            line-height: 1.2;
            margin-bottom: 10px;
          }

          div.dOptions {
            display: flex;
            align-items: center;
            gap: 30px;

            p {
              font-weight: 600;
              color: lightgray;
              margin: 0;
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
          top: calc(50% - 19px);
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

  & > div {
    p {
      font-weight: 700;
      font-size: 20px;
      text-align: right;
      display: flex;
      justify-content: space-between;

      &:last-of-type {
        display: flex;
        justify-content: flex-end;
        margin-top: 10px;
      }
    }
  }
`;

const MobileCart = () => {
  const [open, setOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [height, setHeight] = useState(0);
  const router = useRouter();

  const {
    isDark,
    cartList,
    message: { isChange },
    isTakeout,
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const removeHandler = (i: number) => {
    setTimeout(() => dispatch(removeItem(i)), 400);
  };

  useEffect(() => {
    if (cartRef.current) {
      setHeight(cartRef.current.getBoundingClientRect().height);
    }
  }, [cartRef.current]);

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

  let y = 0,
    startY = 0,
    transY = 0,
    time = 0;

  const touchStartHandler: TouchEventHandler<HTMLDivElement> = ({
    changedTouches: {
      0: { clientY, target },
    },
  }) => {
    if (!(target as HTMLElement).closest('div.cartListContainer ul') && cartRef.current) {
      cartRef.current.style.transition = '0s';
      startY = clientY;
      time = new Date().getTime();
      y = cartRef.current.getBoundingClientRect().y;
    }
  };

  const touchMoveHandler: TouchEventHandler<HTMLDivElement> = ({
    changedTouches: {
      0: { clientY, target },
    },
  }) => {
    if (!(target as HTMLElement).closest('div.cartListContainer ul') && cartRef.current) {
      const ratio = transY / height;
      transY = clientY - startY + y - 60;

      if (ratio > 0 && ratio < 0.93) {
        cartRef.current.style.transform = `translateY(${transY}px)`;
      }
    }
  };

  const touchEndHandler: TouchEventHandler<HTMLDivElement> = ({
    changedTouches: {
      0: { clientY, target },
    },
  }) => {
    if (!(target as HTMLElement).closest('div.cartListContainer ul') && cartRef.current) {
      const ratio = transY / height;
      const speed = (clientY - startY) / (new Date().getTime() - time);

      if (speed > 0.5) {
        cartRef.current.style.transform = `translateY(93%)`;
        setOpen(false);
      } else if (speed < -0.5) {
        cartRef.current.style.transform = `translateY(0%)`;
        setOpen(true);
      } else if (ratio > 0.5 && speed !== 0) {
        cartRef.current.style.transform = `translateY(93%)`;
        setOpen(false);
      } else if (ratio <= 0.5 && speed !== 0) {
        cartRef.current.style.transform = `translateY(0%)`;
        setOpen(true);
      }

      cartRef.current.style.transition = '0.4s';
    }
  };

  return (
    <StyledMCart //
      ref={cartRef}
      className='mCart'
      isDark={isDark}
      open={open}
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={touchEndHandler}
    >
      {isChange && <Message />}
      <BsChevronDoubleUp size={30} color={isDark ? 'white' : 'gray'} />
      <h2>Cart</h2>
      <div className='cartListContainer'>
        <ul>
          {cartList.map((e, i) => (
            <li key={i}>
              <Image src={e.item.imageUrl} alt='some item' width={60} height={55} />
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
                  const liElement = (ev.target as HTMLElement).closest('div.cartListContainer > ul > li');
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
    </StyledMCart>
  );
};

export default MobileCart;
