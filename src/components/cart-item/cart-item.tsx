import React from 'react';
import cn from 'classnames';
import styles from './cart-item.module.scss';
import { ICartItemProps } from './cart-item.props';

export default function CartItem({ product }: ICartItemProps): JSX.Element {
  const { name, price, quantity } = product;

  const totalPriceProduct = price * quantity;

  return (
    <li className="collection-item">
      {name}
      {' '}
      х
      {' '}
      {quantity}
      {' '}
      =
      {' '}
      {totalPriceProduct}
      <button
        type="button"
        className={cn(styles.button, 'secondary-content')}
      >
        <i className="material-icons">clear</i>
      </button>
    </li>
  );
}
