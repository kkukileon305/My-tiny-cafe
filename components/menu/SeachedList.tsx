import { useRouter } from 'next/router';
import styled from 'styled-components';
import { CoffeeData } from '../../getCoffeeData';
import { useAppSelector } from '../../hooks';
import { Item } from '../../type';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const StyledItem = styled.li<{ isDark: boolean }>``;

type SearchedListProps = {
  item: Item;
  data: CoffeeData | undefined;
};

const SearchedList = ({ item, data }: SearchedListProps) => {
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

export default SearchedList;
