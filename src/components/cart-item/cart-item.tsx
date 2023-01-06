import React from 'react';
import cn from 'classnames';
import styles from './cart-item.module.scss';
import { ICartItemProps } from './cart-item.props';

export default function CartItem(
  {
    product, deleteFromCart, incQuantity, decQuantity,
  }: ICartItemProps,
): JSX.Element {
  const {
    name, price, quantity, id,
  } = product;

  const totalPriceProduct = price * quantity;
  const disabledDecButton = quantity <= 1;

  return (
    <li className={cn(styles.item, 'collection-item')}>
      <p className={styles.title}>{name}</p>
      <div className={styles.switcher}>
        <button
          className={styles.button}
          type="button"
          onClick={() => decQuantity(id)}
          disabled={disabledDecButton}
        >
          <i
            className="material-icons basket-quantity"
          >
            remove
          </i>
        </button>
        {' '}
        x
        {quantity}
        {' '}
        <button
          className={styles.button}
          type="button"
          onClick={() => incQuantity(id)}
        >
          <i
            className="material-icons basket-quantity"
          >
            add
          </i>
        </button>
      </div>
      <p className={styles.price}>
        {totalPriceProduct}
        {' '}
        руб.
      </p>
      <button
        type="button"
        className={cn(styles.button, styles.closeButton, 'secondary-content')}
        onClick={() => deleteFromCart(id)}
      >
        <i className="material-icons">clear</i>
      </button>
    </li>
  );
}
