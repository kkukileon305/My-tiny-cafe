import styled from 'styled-components';
import Image from 'next/image';
import { Item } from '../../type';
import { useRouter } from 'next/router';
import { useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { CoffeeData } from '../../getCoffeeData';

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

    @media screen and (min-width: 760px) {
      font-size: 24px;
    }
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
  data: CoffeeData | undefined;
};

const ItemList = ({ item, data }: ItemProps) => {
  const router = useRouter();
  const { isDark } = useAppSelector((state) => state);
  const [keyName, setKeyName] = useState<string>();
  const [index, setIndex] = useState<number>();

  useEffect(() => {
    if (data) {
      const keyNames = Object.keys(data as CoffeeData);
      setKeyName(keyNames.find((e) => data[e].find((s) => s.krName === item.krName)));
    }
  }, []);

  useEffect(() => {
    if (keyName && data) {
      setIndex(data[keyName].findIndex((e) => e.krName === item.krName));
    }
  }, [keyName]);

  return (
    <StyledItem
      onClick={() => {
        router.push(`/details?curMenuName=${keyName}&index=${index}`);
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
