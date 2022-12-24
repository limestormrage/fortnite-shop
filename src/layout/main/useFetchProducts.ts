import { useCallback, useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../config';
import { transformProduct } from './helpers';
import { IUseFetchProducts } from './interface';

export const useFetchProducts = (): IUseFetchProducts => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [isReloadRequest, SetIsReloadRequest] = useState(0);

  const refetchProducts = useCallback(() => {
    SetIsReloadRequest(Math.random());
  }, []);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setIsError(false);

        if (data.shop) {
          setProducts(data.shop.map(transformProduct));
        }
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [isReloadRequest]);

  return {
    products, isLoading, isError, refetchProducts,
  };
};
