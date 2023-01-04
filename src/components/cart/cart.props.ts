import { ICartProduct } from '../../types';

export interface ICartProps {
  currentProduct: ICartProduct[];
  deleteToCart: (id: string) => void;
}
