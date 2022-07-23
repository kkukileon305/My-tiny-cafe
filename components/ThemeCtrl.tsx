import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { toggleTheme } from '../slices/isDark';
import { Color } from '../theme';

const StyledDiv = styled.div<{ isDark: boolean }>`
  width: 50px;
  height: 20px;
  border-radius: 10px;
  background-color: ${({ isDark }) => (isDark ? Color.darkBrown : 'white')};
  display: flex;
  align-items: center;
  padding: 0 3px;
  transition: 0.4s;

  button {
    border: none;
    border-radius: 10px;
    background-color: ${({ isDark }) => (isDark ? 'gray' : 'lightgray')};
    width: 14px;
    height: 14px;
    transition: 0.4s;
    transform: translateX(${({ isDark }) => (isDark ? '30px' : '0px')});
  }
`;

const ThemeCtrl = () => {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state) => state.isDark);

  return (
    <StyledDiv
      isDark={isDark}
      onClick={() => {
        dispatch(toggleTheme());
      }}
    >
      <button />
    </StyledDiv>
  );
};

export default ThemeCtrl;
