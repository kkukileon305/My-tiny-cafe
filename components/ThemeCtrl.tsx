import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { toggleTheme } from '../slices/isDark';
import { Color } from '../theme';

const StyledDiv = styled.div<{ isDark: boolean }>`
  width: 50px;
  height: 20px;
  border-radius: 10px;
  background-color: red;
  background-color: white;
  display: flex;
  justify-content: ${({ isDark }) => (isDark ? 'flex-end' : 'flex-start')};
  align-items: center;
  padding: 0 1px;

  button {
    border: none;
    border-radius: 10px;
    background-color: ${Color.brown};
    width: 18px;
    height: 18px;
  }
`;

const ThemeCtrl = () => {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector((state) => state.isDark);

  return (
    <StyledDiv isDark={isDark}>
      <button
        onClick={() => {
          dispatch(toggleTheme());
        }}
      />
    </StyledDiv>
  );
};

export default ThemeCtrl;
