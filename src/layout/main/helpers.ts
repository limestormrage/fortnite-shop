import { IBackProduct, IProduct } from '../../types';

export const transformProduct = ({
  mainId, displayName, displayDescription, displayAssets, price,
}: IBackProduct): IProduct => (
  {
    price: price.finalPrice,
    image: displayAssets[0].background,
    description: displayDescription,
    id: mainId,
    name: displayName,
  }
);
