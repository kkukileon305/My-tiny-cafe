import { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setIsChange, setIsMessage } from '../slices/message';

const sizeUp = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  23% {
    transform: translateY(-40px);
    opacity: 1;
  }
  
  66% {
    transform: translateY(-40px);
    opacity: 1;
  }

  100% {
    transform: translateY(-40px);
    opacity: 0;
  }
`;

const StyledMessage = styled.div<{
  visible: boolean | undefined;
}>`
  position: absolute;
  right: 10px;
  top: 0px;
  height: 30px;
  width: 100px;
  background-color: #fe7575;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  color: white;
  animation: ${sizeUp} forwards 2s;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

type MessageProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Message = ({ setOpen }: MessageProps) => {
  const message = useAppSelector((state) => state.message.isMessage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsMessage(false));
      dispatch(setIsChange(false));
    }, 2000);
  }, []);

  return (
    <StyledMessage visible={message} onClick={() => setOpen(true)}>
      카트 확인!
    </StyledMessage>
  );
};

export default Message;
