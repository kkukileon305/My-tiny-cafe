export type CoffeeItem = {
  krName: string;
  enName: string;
  description: string;
  price: number;
};

export type PickedItem = {
  item: CoffeeItem;
  isIce: boolean;
  isSizeUp: boolean;
};
