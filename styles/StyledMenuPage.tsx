import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledMenuPage = styled.main`
  height: calc(100vh - 36px);
  display: flex;
  overflow-y: hidden;

  div.left {
    width: calc(100vw - 170px);
    overflow-y: auto;

    h2 {
      font-weight: 700;
      font-size: 30px;
      margin: 20px 14px;
    }

    & > ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      row-gap: 60px;
    }
  }
`;

export default StyledMenuPage;
