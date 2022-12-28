import React from 'react';
import Product from '../product/product';
import styles from './product-list.module.scss';
import { IProductListProps } from './product-list.props';

export default function ProductList({ products, addToCart }: IProductListProps): JSX.Element {
  if (!products.length) {
    return (
      <h3>Товары отсутствуют</h3>
    );
  }

  return (
    <div className={styles.products}>
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}
