import { IProduct } from '../../types';

export interface IProductProps {
  product: IProduct;
  addToCart: (product: IProduct) => void;
}
