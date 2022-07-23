import type { NextPage } from 'next';
import Button from '../components/main/Button';
import StyledMainPage from '../styles/StyledMainPage';

const Home: NextPage = () => {
  return (
    <StyledMainPage>
      <h1>My Tiny Cafe</h1>

      <div className='btnContainer'>
        <Button setTake={true}>Take out</Button>
        <Button setTake={false}>Eat in</Button>
      </div>
    </StyledMainPage>
  );
};

export default Home;
