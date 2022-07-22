import Image from 'next/image';
import { useEffect, useState } from 'react';
import Aside from '../components/menu/Aside';
import Gnb, { MenuTitle } from '../components/menu/Gnb';
import Header from '../components/menu/Header';
import ItemList from '../components/menu/ItemList';
import MenuSkeleton from '../components/menu/MenuSkeleton';
import MobileCart from '../components/mobile/MobileCart';
import getCoffeeData from '../getCoffeeData';
import StyledMenuPage from '../styles/StyledMenuPage';
import { Item } from '../type';

const MenuPage = () => {
  const [loading, setLoading] = useState(false);
  const [curMenu, setCurMenu] = useState(0);
  const [curMenuName, setCurMenuName] = useState('');
  const [menuList, setMenuList] = useState<Item[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getCoffeeData();
        setMenuList(data.coffee);
        setCurMenuName(MenuTitle[curMenu]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    })();
  }, [curMenu]);

  return (
    <>
      <MobileCart />
      <Header />
      <StyledMenuPage>
        <div className='left'>
          <Gnb curMenu={curMenu} setCurMenu={setCurMenu} />
          <div className='menuContainer'>
            {loading ? (
              <MenuSkeleton />
            ) : (
              <>
                <h2>{curMenuName}</h2>
                <ul>
                  {menuList.map((e, i) => (
                    <ItemList key={i} item={e} />
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
        <Aside />
      </StyledMenuPage>
    </>
  );
};

export default MenuPage;
