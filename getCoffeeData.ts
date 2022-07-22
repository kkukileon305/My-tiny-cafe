import coffeeData from './coffeeData.json';

interface CoffeeData {
  coffee: {
    krName: string;
    enName: string;
    description: string;
    price: number;
  }[];
  drink: {
    krName: string;
    enName: string;
    description: string;
    price: number;
  }[];
}

const getCoffeeData = () =>
  new Promise<CoffeeData>((res, rej) => {
    setTimeout(() => res(coffeeData), 500 * Math.random());
  });

export default getCoffeeData;
