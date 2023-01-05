import { ICartProduct } from '../../types';

export interface ICartItemProps {
  product: ICartProduct;
  deleteFromCart: (id: string) => void;
  incQuantity: (productId: string) => void;
  decQuantity: (productId: string) => void;
}
