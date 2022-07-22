import { TouchEventHandler, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';

const StyledMCart = styled.div<{ open: boolean }>`
  display: none;

  @media screen and (max-width: 570px) {
    display: block;
    position: fixed;
    width: 100vw;
    height: 100vh;
    left: 0;
    bottom: 0px;
    background-color: white;
    z-index: 9999;
    border-radius: 10px;
    box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(95%);
    padding: 30px 20px;
  }

  h2 {
    font-size: 30px;
    font-weight: 700;
  }
`;

const MobileCart = () => {
  const [open, setOpen] = useState(false);
  const cartRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  const dispatch = useAppSelector((state) => state.cartList);

  useEffect(() => {
    cartRef.current && setHeight(cartRef.current.getBoundingClientRect().height);
  }, [cartRef.current]);

  let y = 0,
    startY = 0,
    transY = 0;

  const touchStartHandler: TouchEventHandler<HTMLDivElement> = ({
    changedTouches: {
      0: { clientY, target },
    },
  }) => {
    const targetElement = (target as HTMLElement).closest('div.mCart');
    startY = clientY;

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
    transY = clientY - startY + y;

    if (transY / height <= 0.95 && transY / height >= 0.1) {
      (targetElement as HTMLElement).style.transform = `translateY(${transY}px)`;
    }
  };

  const touchEndHandler: TouchEventHandler<HTMLDivElement> = ({ target }) => {
    const targetElement = (target as HTMLElement).closest('div.mCart');
    (targetElement as HTMLElement).style.transition = '0.4s';

    if (transY / height > 0.55) {
      (targetElement as HTMLElement).style.transform = `translateY(95%)`;
    } else {
      (targetElement as HTMLElement).style.transform = `translateY(10%)`;
    }
  };

  return (
    <StyledMCart //
      open={open}
      onTouchStart={touchStartHandler}
      onTouchMove={touchMoveHandler}
      onTouchEnd={touchEndHandler}
      ref={cartRef}
      className='mCart'
    >
      <h2>카트</h2>
    </StyledMCart>
  );
};

export default MobileCart;
