import styled from 'styled-components';
import Image from 'next/image';
import { Item } from '../../type';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../hooks';

const StyledItem = styled.li<{ isDark: boolean }>`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  word-break: keep-all;
  gap: 10px;

  h4 {
    font-weight: 600;
    margin-top: 10px;
  }

  p {
    line-height: 1.3;
    color: ${({ isDark }) => (isDark ? '#666666' : 'lightgray')};
    font-weight: 600;
    font-size: 14px;
  }
`;

type ItemProps = {
  item: Item;
  index: number;
  curMenuName: string;
};

const ItemList = ({ item, curMenuName, index }: ItemProps) => {
  const router = useRouter();
  const isDark = useAppSelector((state) => state.isDark);

  return (
    <StyledItem
      onClick={() => {
        router.push(`/details?curMenuName=${curMenuName}&index=${index}`);
      }}
      isDark={isDark}
    >
      <Image //
        src={item.imageUrl}
        alt='some coffee...'
        width={150}
        height={150}
        priority={true}
      />
      <h4>{item.krName}</h4>
      <p>{item.description}</p>
    </StyledItem>
  );
};

export default ItemList;
