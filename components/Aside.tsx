import styled from 'styled-components';
import { Color } from '../theme';

const StyledAside = styled.aside`
  width: 170px;
  height: 100%;
  background-color: ${Color.brown};

  @media screen and (max-width: 570px) {
    display: none;
  }
`;

const Aside = () => {
  return <StyledAside />;
};

export default Aside;
