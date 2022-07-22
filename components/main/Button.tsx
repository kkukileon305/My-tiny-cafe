import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks';
import { setTakeout } from '../../slices/isTakeout';
import { Color } from '../../theme';

const StyledButton = styled.button`
  background-color: ${Color.softBrown};
  border: none;
  color: white;
  font-size: 20px;
  width: 100px;
  padding: 10px 0;
`;

type ButtonProps = {
  children?: ReactNode;
  setTake: boolean;
};

const Button = ({ children, setTake }: ButtonProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <StyledButton //
      onClick={() => {
        dispatch(setTakeout(setTake));
        router.push('/menu');
      }}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
