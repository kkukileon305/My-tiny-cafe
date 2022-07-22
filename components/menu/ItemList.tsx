import styled from 'styled-components';
import Image from 'next/image';
import { Item } from '../../type';

const StyledItem = styled.li`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  word-break: keep-all;
  gap: 10px;

  span {
    border-radius: 75px;
  }

  h4 {
    font-weight: 600;
    margin-top: 10px;
  }

  p {
    line-height: 1.3;
    color: lightgray;
    font-weight: 600;
    font-size: 14px;
  }
`;

type ItemProps = {
  item: Item;
  key: number;
};

const ItemList = ({ item }: ItemProps) => {
  return (
    <StyledItem>
      <Image //
        src={item.imageUrl}
        alt='some coffee...'
        width={150}
        height={150}
      />
      <h4>{item.krName}</h4>
      <p>{item.description}</p>
    </StyledItem>
  );
};

export default ItemList;
