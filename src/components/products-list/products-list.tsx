import React from 'react';
import Product from '../product/product';
import styles from './product-list.module.scss';

export default function ProductList(): JSX.Element {
  return (
    <div className={styles.products}>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  );
}
