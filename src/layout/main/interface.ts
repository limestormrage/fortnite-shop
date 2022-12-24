import { IProduct } from '../../types';

export interface IUseFetchProducts {
  products: IProduct[];
  isLoading: boolean;
  isError: boolean;
  refetchProducts: () => void;
}
