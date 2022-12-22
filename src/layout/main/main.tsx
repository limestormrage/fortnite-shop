import React, { useEffect, useState } from 'react';
import { Preloader } from '../../components/preloader/preloader';
import ProductList from '../../components/products-list/products-list';
import { API_KEY, API_URL } from '../../config';

export function Main(): JSX.Element {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // TODO типизировать заголовок
  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY as string,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.shop) {
          setProducts(data.shop);
        }

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
