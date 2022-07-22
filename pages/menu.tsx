import Image from 'next/image';
import { useEffect, useState } from 'react';
import Aside from '../components/menu/Aside';
import Gnb from '../components/menu/Gnb';
import Header from '../components/menu/Header';
import ItemList from '../components/menu/ItemList';
import getCoffeeData from '../getCoffeeData';
import StyledMenuPage from '../styles/StyledMenuPage';
import { Item } from '../type';

const MenuPage = () => {
  const [loading, setLoading] = useState(false);
  const [curMenu, setCurMenu] = useState(0);
  const [menuList, setMenuList] = useState<Item[]>([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getCoffeeData();
        setMenuList(data.coffee);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(true);
      }
    })();
  }, []);

  return (
    <>
      <Header />

      <StyledMenuPage>
        <div className='left'>
          <Gnb curMenu={curMenu} setCurMenu={setCurMenu} />
          <h2>Coffee</h2>
          <ul>
            {menuList.map((e, i) => (
              <ItemList key={i} item={e} />
            ))}
          </ul>
        </div>
        <Aside />
      </StyledMenuPage>
    </>
  );
};

export default MenuPage;
