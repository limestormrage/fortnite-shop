import { ICartProduct } from '../../types';

export interface ICartListProps {
  cartItems: ICartProduct[];
  onClose: () => void;
  deleteFromCart: (id: string) => void;
  incQuantity: (productId: string) => void;
  decQuantity: (productId: string) => void;
}
