import type { NextPage } from 'next';
import Button from '../components/Button';
import { useAppDispatch, useAppSelector } from '../hooks';
import { addItem, removeItem, removeItemAll } from '../slices/cartList';

const Home: NextPage = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector((state) => state.cartList);

  return (
    <>
      <Button setTake={true}>포장하기</Button>
      <button
        onClick={() => {
          dispatch(
            addItem({
              item: {
                krName: '아메리카노',
                enName: 'Americano',
                description: '진한 맛의 아메리카노',
                price: 2000,
              },
              isIce: true,
              isSizeUp: true,
            })
          );
        }}
      >
        아메리카노 추가
      </button>
      <button
        onClick={() => {
          dispatch(
            addItem({
              item: {
                krName: '카페라뗴',
                enName: 'Cafe Latte',
                description: '부드러운 우유와 커피의 조합',
                price: 2500,
              },
              isIce: true,
              isSizeUp: true,
            })
          );
        }}
      >
        f라뗴 추가
      </button>
      <button onClick={() => dispatch(removeItemAll())}>전부삭제</button>
      <ul>
        {list.map((e, i) => (
          <li key={i} onClick={() => dispatch(removeItem(i))}>
            {e.item.krName}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
