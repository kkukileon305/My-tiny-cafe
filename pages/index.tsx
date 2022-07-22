import type { NextPage } from 'next';
import Button from '../components/Button';

const Home: NextPage = () => {
  return (
    <>
      <Button setTake={true}>포장하기</Button>
    </>
  );
};

export default Home;
