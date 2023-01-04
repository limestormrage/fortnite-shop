import { ICartProduct } from '../../types';

export interface ICartItemProps {
  product: ICartProduct;
  deleteToCart: (id: string) => void;
}
