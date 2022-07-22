import { useState } from 'react';
import Header from '../components/menu/Header';
import StyledMenuPage from '../styles/StyledMenuPage';

const MenuPage = () => {
  const [curMenu, setCurMenu] = useState(0);

  return (
    <>
      <Header curMenu={curMenu} setCurMenu={setCurMenu} />
      <StyledMenuPage>
        <h2></h2>
      </StyledMenuPage>
    </>
  );
};

export default MenuPage;
