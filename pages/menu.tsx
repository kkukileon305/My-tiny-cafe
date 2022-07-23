import Image from 'next/image';
import { useEffect, useState } from 'react';
import Aside from '../components/Aside';
import Gnb, { MenuTitle } from '../components/menu/Gnb';
import Header from '../components/Header';
import ItemList from '../components/menu/ItemList';
import MenuSkeleton from '../components/menu/MenuSkeleton';
import MobileCart from '../components/mobile/MobileCart';
import getCoffeeData from '../getCoffeeData';
import StyledMenuPage from '../styles/StyledMenuPage';
import { Item } from '../type';
import { useAppSelector } from '../hooks';

const MenuPage = () => {
  const [loading, setLoading] = useState(false);
  const [curMenu, setCurMenu] = useState(0);
  const [curMenuName, setCurMenuName] = useState('coffee');
  const [menuList, setMenuList] = useState<Item[]>([]);
  const isDark = useAppSelector((state) => state.isDark);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getCoffeeData();
        setMenuList(data[curMenuName]);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    })();
  }, [curMenuName]);

  useEffect(() => {
    setCurMenuName(MenuTitle[curMenu]);
  }, [curMenu]);

  return (
    <>
      <MobileCart />
      <Header />
      <StyledMenuPage isDark={isDark}>
        <div className='left'>
          <Gnb curMenu={curMenu} setCurMenu={setCurMenu} />
          <div className='menuContainer'>
            {loading ? (
              <MenuSkeleton />
            ) : (
              <>
                <h2>{curMenuName.toUpperCase()}</h2>
                <ul>
                  {menuList.map((e, i) => (
                    <ItemList //
                      index={i}
                      curMenuName={curMenuName}
                      key={i}
                      item={e}
                    />
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
