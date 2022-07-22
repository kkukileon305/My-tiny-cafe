export type Item = {
  krName: string;
  enName: string;
  description: string;
  price: number;
  imageUrl: string;
};

export type PickedItem = {
  item: Item;
  isIce: boolean;
  isSizeUp: boolean;
};
