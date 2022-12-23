import React, { useEffect, useState } from 'react';
import { Preloader } from '../../components/preloader/preloader';
import ProductList from '../../components/products-list/products-list';
import { API_KEY, API_URL } from '../../config';
import { IBackProduct } from '../../types';
import { transformProduct } from './helpers';

export function Main(): JSX.Element {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.featured) {
          setProducts(data.featured.map(transformProduct));
        }
      })
      .catch((error) => {
        throw (error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="container main">
      {isLoading
        ? <Preloader />
        : <ProductList />}
    </main>
  );
}
