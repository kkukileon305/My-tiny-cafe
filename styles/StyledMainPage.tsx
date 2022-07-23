import styled from 'styled-components';
import { Color } from '../theme';

const StyledMainPage = styled.main`
  width: 100%;
  height: 100%;
  background-image: url('https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');
  background-position: center, 100%;
  padding: 130px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    color: white;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
  }

  div.btnContainer {
    display: flex;
    justify-content: center;
    gap: 50px;
  }
`;

export default StyledMainPage;
