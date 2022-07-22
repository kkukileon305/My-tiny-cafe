import styled from 'styled-components';
import { Color } from '../theme';

const StyledMainPage = styled.main`
  width: 100%;
  height: 100%;
  background-color: ${Color.darkBrown};
  padding: 130px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    color: white;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
  }

  div.btnContainer {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
`;

export default StyledMainPage;
