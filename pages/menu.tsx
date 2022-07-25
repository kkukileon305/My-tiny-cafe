import Image from 'next/image';
import { ChangeEventHandler, TouchEventHandler, useEffect, useState } from 'react';
import Aside from '../components/Aside';
import Gnb, { MenuTitle } from '../components/menu/Gnb';
import Header from '../components/Header';
import ItemList from '../components/menu/ItemList';
import MenuSkeleton from '../components/menu/MenuSkeleton';
import MobileCart from '../components/mobile/MobileCart';
import getCoffeeData, { CoffeeData } from '../getCoffeeData';
import StyledMenuPage from '../styles/StyledMenuPage';
import { Item } from '../type';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setIsMessage } from '../slices/message';
import SearchedList from '../components/menu/SeachedList';

const MenuPage = () => {
  const [loading, setLoading] = useState(true);
  const curMenu = useAppSelector((state) => state.curMenu);
  const [curMenuName, setCurMenuName] = useState(MenuTitle[curMenu]);
  const [menuList, setMenuList] = useState<Item[]>([]);
  const [searchList, setSearchList] = useState<Item[]>([]);
  const [searchMode, setSearchMode] = useState(false);
  const [data, setData] = useState<CoffeeData>();

  const isDark = useAppSelector((state) => state.isDark);
  const dispatch = useAppDispatch();

  const {
    message: { isChange },
  } = useAppSelector((state) => state);

  useEffect(() => {
    isChange && dispatch(setIsMessage(true));
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const data = await getCoffeeData();
        setData(data);
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

  const changeHandler: ChangeEventHandler<HTMLInputElement> = async ({
    //
    target: { value },
  }) => {
    setLoading(true);

    try {
      const { coffee, drinks, latte, desserts } = await getCoffeeData();
      setSearchList([...coffee.filter((e) => e.krName.includes(value)), ...drinks.filter((e) => e.krName.includes(value)), ...latte.filter((e) => e.krName.includes(value)), ...desserts.filter((e) => e.krName.includes(value))]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <MobileCart />
      <Header />
      <StyledMenuPage isDark={isDark} searchMode={searchMode}>
        <div className='left'>
          <Gnb
            curMenu={curMenu} //
            setSearchMode={setSearchMode}
            searchMode={searchMode}
            changeHandler={changeHandler}
          />
          <div className='menuContainer'>
            <div>
              {loading ? (
                <MenuSkeleton isSearch={false} />
              ) : (
                <>
                  <div>
                    <h2>{curMenuName.toUpperCase()}</h2>
                    <ul>
                      {menuList.map((e, i) => (
                        <ItemList //
                          key={i}
                          item={e}
                          data={data}
                        />
                      ))}
                    </ul>
                  </div>
                </>
              )}
              <div className='searchList'>
                {loading ? (
                  <MenuSkeleton isSearch={true} />
                ) : (
                  <>
                    <h2>SEARCH</h2>
                    <ul>
                      {searchList.map((e, i) => (
                        <ItemList //
                          item={e}
                          data={data}
                          key={i}
                        />
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <Aside />
      </StyledMenuPage>
    </>
  );
};

export default MenuPage;
