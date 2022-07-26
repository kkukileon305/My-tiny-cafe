import styled from 'styled-components';
import { Color } from '../theme';
import { MdHome } from 'react-icons/md';
import { FiCoffee } from 'react-icons/fi';
import { useAppDispatch } from '../hooks';
import { removeItemAll } from '../slices/cartList';
import { useRouter } from 'next/router';
import ThemeCtrl from './ThemeCtrl';

const StyledHeader = styled.header`
  height: 40px;
  background-color: ${Color.brown};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  h2 {
    color: white;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 10px;
  }
`;

const Header = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <StyledHeader>
      <h2>
        My Tiny Cafe <FiCoffee />
      </h2>
      <ThemeCtrl />
      <MdHome
        size={30}
        color='white' //
        onClick={() => {
          dispatch(removeItemAll());
          router.push('/');
        }}
      />
    </StyledHeader>
  );
};

export default Header;
