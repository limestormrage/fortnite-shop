import React from 'react';
import cn from 'classnames';
import styles from './cart.module.scss';

export default function Cart(): JSX.Element {
  return (
    <div className={cn(styles.cart, 'deep-purple darken-4 white-text')}>
      <i className="material-icons">shopping_cart</i>
      <span>0</span>
    </div>
  );
}
