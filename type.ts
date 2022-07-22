export type CoffeeItem = {
  krName: string;
  enName: string;
  description: string;
  price: number;
  imageUrl?: string;
};

export type PickedItem = {
  item: CoffeeItem;
  isIce: boolean;
  isSizeUp: boolean;
};
