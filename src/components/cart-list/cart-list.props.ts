import { ICartProduct } from '../../types';

export interface ICartListProps {
  cartItems: ICartProduct[];
  onClose: () => void;
  deleteToCart: (id: string) => void;
}
