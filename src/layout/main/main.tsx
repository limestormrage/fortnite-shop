import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Cart from '../../components/cart/cart';
import { Preloader } from '../../components/preloader/preloader';
import ProductList from '../../components/products-list/products-list';
import { ICartProduct, IProduct } from '../../types';
import { useFetchProducts } from './useFetchProducts';

export function Main(): JSX.Element {
  const [currentProduct, setCurrentProduct] = useState<ICartProduct[]>([]);

  const {
    isError, isLoading, products, refetchProducts,
  } = useFetchProducts();

  const addToCart = (product: IProduct): void => {
    const itemIndex = currentProduct.findIndex((item) => item.id === product.id);
    const toastContent = `${product.name} добавлен в корзину`;

    const cartProduct = {
      name: product.name,
      price: product.price,
      id: product.id,
      quantity: 1,
    };

    if (itemIndex < 0) {
      setCurrentProduct([...currentProduct, cartProduct]);
    } else {
      const newOrder = currentProduct.map((item, index) => {
        if (index === itemIndex) {
          return ({
            ...cartProduct,
            quantity: item.quantity + 1,
          });
        }

        return item;
      });

      setCurrentProduct(newOrder);
    }
    toast.success(toastContent, { autoClose: 2000, theme: 'colored' });
  };

  const deleteFromCart = (id: string): void => {
    const newOrder = currentProduct.filter((product) => product.id !== id);

    setCurrentProduct(newOrder);
  };

  const incQuantity = (productId: string): void => {
    const newOrder = currentProduct.map((product) => {
      if (product.id === productId) {
        return ({
          ...product,
          quantity: product.quantity + 1,
        });
      }
      return product;
    });

    setCurrentProduct(newOrder);
  };

  const decQuantity = (productId: string): void => {
    const newOrder = currentProduct.map((product) => {
      if (product.id === productId) {
        const newQuantity = product.quantity - 1;

        return ({
          ...product,
          quantity: newQuantity > 1 ? newQuantity : 1,
        });
      }

      return product;
    });

    setCurrentProduct(newOrder);
  };

  return (
    <main className="container main">
      <Cart
        currentProduct={currentProduct}
        deleteFromCart={deleteFromCart}
        incQuantity={incQuantity}
        decQuantity={decQuantity}
      />
      {isLoading && <Preloader />}
      {isError && (
        <div>
          <p>Ошибка запроса</p>
          <button type="button" onClick={refetchProducts}>перезагрузить</button>
        </div>
      )}
      {!!products.length && (
      <ProductList
        products={products}
        addToCart={addToCart}
      />
      )}
    </main>
  );
}
