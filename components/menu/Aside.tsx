import styled from 'styled-components';
import { Color } from '../../theme';

const StyledAside = styled.aside`
  width: 170px;
  height: 100%;
  background-color: ${Color.brown};
`;

const Aside = () => {
  return <StyledAside />;
};

export default Aside;
