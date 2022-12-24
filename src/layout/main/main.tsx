import React from 'react';
import Cart from '../../components/card/card';
import { Preloader } from '../../components/preloader/preloader';
import ProductList from '../../components/products-list/products-list';
import { useFetchProducts } from './useFetchProducts';

export function Main(): JSX.Element {
  const {
    isError, isLoading, products, refetchProducts,
  } = useFetchProducts();

  return (
    <main className="container main">
      <Cart />
      {isLoading && <Preloader />}
      {isError && (
        <div>
          <p>Ошибка запроса</p>
          <button type="button" onClick={refetchProducts}>перезагрузить</button>
        </div>
      )}
      {!!products.length && <ProductList products={products} />}
    </main>
  );
}
