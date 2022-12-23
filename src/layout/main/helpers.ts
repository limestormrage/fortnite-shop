import { IBackProduct, IProduct } from '../../types';

export const transformProduct = ({
  price, icon, description, id, name,
}: IBackProduct): IProduct => (
  {
    price,
    image: icon,
    description,
    id,
    name,
  }
);
