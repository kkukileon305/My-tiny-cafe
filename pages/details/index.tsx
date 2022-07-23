import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Aside from '../../components/Aside';
import Header from '../../components/Header';
import MobileCart from '../../components/mobile/MobileCart';
import StyledDetailPage from '../../styles/StyledDetails';

const Details = () => {
  const router = useRouter();
  const { curMenuName, index } = router.query;

  useEffect(() => {
    if (router.isReady) {
      console.log(router.query);
    }
  }, [router.isReady]);

  return (
    <>
      <MobileCart />
      <Header />
      <StyledDetailPage>
        <div className='left'></div>
        <Aside />
      </StyledDetailPage>
    </>
  );
};

export default Details;
