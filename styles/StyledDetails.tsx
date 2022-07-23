import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledDetailPage = styled.main`
  height: calc(100vh - 36px);
  display: flex;
  overflow-y: hidden;

  div.left {
    width: calc(100vw - 170px);

    @media screen and (max-width: 570px) {
      width: 100vw;
    }
  }
`;

export default StyledDetailPage;
