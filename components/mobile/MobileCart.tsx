import { TouchEventHandler, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { VscTriangleUp } from 'react-icons/vsc';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Color } from '../../theme';

const StyledMCart = styled.div<{ isDark: boolean }>`
  display: none;

  @media screen and (max-width: 570px) {
    display: block;
    position: fixed;
    width: 98vw;
    height: calc(100vh - 30px);
    left: 1vw;
    bottom: 0px;
    background-color: ${({ isDark }) => (isDark ? '#303030' : ' white')};
    z-index: 9999;
    border-radius: 10px;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(95%);
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
  }

  & > svg {
    position: absolute;
    left: calc(50% - 10px);
    top: 4px;
  }

  div.cartListContainer {
    height: 100%;
    border: 1px solid black;
    overflow-y: auto;
  }

  button {
    border: none;
    background-color: ${Color.softBrown};
    color: white;
    font-weight: 500;
    padding: 10px;
    font-size: 18px;
  }
`;

const MobileCart = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const isDark = useAppSelector((state) => state.isDark);
  const cartList = useAppSelector((state) => state.cartList);

  useEffect(() => {
    cartRef.current && setHeight(cartRef.current.getBoundingClientRect().height);
  }, [cartRef.current]);

  let y = 0,
    startY = 0,
    transY = 0,
    time = 0;

  const touchStartHandler: TouchEventHandler<HTMLDivElement> = ({
    changedTouches: {
      0: { clientY, target },
    },
  }) => {
    const targetElement = (target as HTMLElement).closest('div.mCart');
    startY = clientY;
    time = new Date().getTime();

    (targetElement as HTMLElement).style.transition = '0s';
    y = (targetElement as HTMLElement).getBoundingClientRect().y;
  };

  const touchMoveHandler: TouchEventHandler<HTMLDivElement> = ({
    changedTouches: {
      0: { clientY },
    },
    target,
  }) => {
    const targetElement = (target as HTMLElement).closest('div.mCart');

    transY = clientY - startY + y - 30;

    if (transY / height <= 0.95 && transY / height >= 0) {
      (targetElement as HTMLElement).style.transform = `translateY(${transY}px)`;
    }
  };

  const touchEndHandler: TouchEventHandler<HTMLDivElement> = ({
    target,
    changedTouches: {
      0: { clientY },
    },
  }) => {
    const targetElement = (target as HTMLElement).closest('div.mCart');
    const speed = (clientY - startY) / (new Date().getTime() - time);
    (targetElement as HTMLElement).style.transition = '0.4s';

    if ((transY / height > 0.55 && speed > -0.4) || speed > 0.4) {
      (targetElement as HTMLElement).style.transform = `translateY(95%)`;
    } else if (transY / height <= 0.55 || speed < -0.4) {
      (targetElement as HTMLElement).style.transform = `translateY(0%)`;
    }
  };

  return (
    <StyledMCart //
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={touchEndHandler}
      ref={cartRef}
      className='mCart'
      isDark={isDark}
    >
      <VscTriangleUp width={20} color='gray' />
      <h2>Cart</h2>
      <div className='cartListContainer'>
        <ul>
          {cartList.map((e, i) => (
            <li key={i}>
              <h4>{e.item.krName}</h4>
              <p>{e.isIce ? 'Ice' : 'Hot'}</p>
              <p>{e.isSizeUp ? 'Large' : 'Tall'}</p>
            </li>
          ))}
        </ul>
      </div>
      <button>제출</button>
    </StyledMCart>
  );
};

export default MobileCart;
