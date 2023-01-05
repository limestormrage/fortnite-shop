import { ICartProduct } from '../../types';

export interface ICartProps {
  currentProduct: ICartProduct[];
  deleteFromCart: (id: string) => void;
  incQuantity: (productId: string) => void;
  decQuantity: (productId: string) => void;
}
