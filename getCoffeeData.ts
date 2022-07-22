import coffeeData from './coffeeData.json';
import { Item } from './type';

interface CoffeeData {
  coffee: Item[];
  drink: Item[];
}

const getCoffeeData = () =>
  new Promise<CoffeeData>((res, rej) => {
    setTimeout(() => res(coffeeData), 500 * Math.random());
  });

export default getCoffeeData;
