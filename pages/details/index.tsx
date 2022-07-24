import { useRouter } from 'next/router';
import { MouseEventHandler, useEffect, useState } from 'react';
import Aside from '../../components/Aside';
import Header from '../../components/Header';
import MobileCart from '../../components/mobile/MobileCart';
import { useAppDispatch, useAppSelector } from '../../hooks';
import StyledDetailPage from '../../styles/StyledDetails';
import { BsArrowLeftShort } from 'react-icons/bs';
import { Color } from '../../theme';
import DetailSkeleton from '../../components/details/DetailSkeleton';
import getCoffeeData from '../../getCoffeeData';
import { Item } from '../../type';
import Image from 'next/image';
import { FaMugHot } from 'react-icons/fa';
import { GiIceCube } from 'react-icons/gi';
import { BiCoffeeTogo } from 'react-icons/bi';
import { MdOutlineCoffee } from 'react-icons/md';
import { addItem } from '../../slices/cartList';

const Details = () => {
  const isDark = useAppSelector((state) => state.isDark);
  const dispatch = useAppDispatch();
  const [detail, setDetail] = useState<Item>();
  const router = useRouter();
  const { curMenuName, index } = router.query;
  const [loading, setLoading] = useState(true);
  const [isIce, setIsIce] = useState(false);
  const [isBig, setIsBig] = useState(false);

  useEffect(() => {
    if (router.isReady) {
      (async () => {
        setLoading(true);
        const data = await getCoffeeData();
        setDetail(data[curMenuName as string][Number(index)]);
        setLoading(false);
      })();
    }
  }, [router.isReady]);

  const addCart: MouseEventHandler<HTMLButtonElement> = () => {
    detail &&
      dispatch(
        addItem({
          isIce,
          isSizeUp: isBig,
          item: detail,
        })
      );

    router.push('/menu');
  };

  return (
    <>
      <MobileCart />
      <Header />
      <StyledDetailPage isDark={isDark} isIce={isIce} isBig={isBig}>
        <div className='left'>
          <div className='btnContainer'>
            <BsArrowLeftShort //
              size={33}
              color={isDark ? 'white' : Color.brown}
              onClick={() => router.push('/menu')}
            />
          </div>
          <div className='detailContainer'>
            <h2>Details</h2>
            {loading ? ( //
              <DetailSkeleton />
            ) : (
              detail && (
                <div className='item'>
                  <div className='flexContainer'>
                    <div className='dLeft'>
                      <Image src={detail.imageUrl} alt='coffee' width={150} height={150} />
                    </div>
                    <div className='dRight'>
                      <h3>{detail.krName}</h3>
                      <p>{detail.enName}</p>
                      <p>{detail.description}</p>
                      <p>price: {detail.price}</p>
                    </div>
                  </div>
                  <div className='options'>
                    <h3>추가 옵션 선택하기</h3>

                    <form onSubmit={(e) => e.preventDefault()}>
                      <h4>온도</h4>
                      <div className='ice'>
                        <button onClick={() => setIsIce(false)}>
                          <FaMugHot size={50} color={isDark ? 'white' : 'black'} />
                          <p>Hot</p>
                        </button>
                        <button onClick={() => setIsIce(true)}>
                          <GiIceCube size={50} color={isDark ? 'white' : 'black'} />
                          <p>Ice</p>
                        </button>
                      </div>
                      <h4>사이즈</h4>
                      <div className='size'>
                        <button onClick={() => setIsBig(false)}>
                          <MdOutlineCoffee size={50} color={isDark ? 'white' : 'black'} />
                          <p>Tall</p>
                        </button>
                        <button onClick={() => setIsBig(true)}>
                          <BiCoffeeTogo size={50} color={isDark ? 'white' : 'black'} />
                          <p>Big</p>
                        </button>
                      </div>
                      <button onClick={addCart}>카트에 넣기</button>
                    </form>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
        <Aside />
      </StyledDetailPage>
    </>
  );
};

export default Details;
