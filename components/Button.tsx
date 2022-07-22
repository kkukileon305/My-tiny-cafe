import { ReactNode } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks';
import { setTakeout } from '../slices/isTakeout';

const StyledButton = styled.button``;

type ButtonProps = {
  children?: ReactNode;
  setTake: boolean;
};

const Button = ({ children, setTake }: ButtonProps) => {
  const dispatch = useAppDispatch();

  return (
    <StyledButton //
      onClick={() => dispatch(setTakeout(setTake))}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
