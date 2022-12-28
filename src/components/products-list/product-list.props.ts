import { IProduct } from '../../types';

export interface IProductListProps {
  products: IProduct[];
  addToCart: (product: IProduct) => void;
}
