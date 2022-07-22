import type { NextPage } from 'next';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addOneCounter } from '../slices/counterSlice';
import { setTakeoutInverse, setTakeoutTrue } from '../slices/isTakeoutSlice';

const Home: NextPage = () => {
  const isTakeout = useAppSelector((state) => state.takeout.isTakeout);
  const counter = useAppSelector((state) => state.counter.counter);

  const dispatch = useAppDispatch();

  return (
    <>
      <h2>{isTakeout ? 'Take out' : 'Eat in'}</h2>
      <button onClick={() => dispatch(setTakeoutInverse())}>굳</button>
      <h2>{counter}</h2>
      <button onClick={() => dispatch(addOneCounter(10))}>굳</button>
    </>
  );
};

export default Home;
