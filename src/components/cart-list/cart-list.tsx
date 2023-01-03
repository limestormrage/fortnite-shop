import React from 'react';
import cn from 'classnames';
import CardItem from '../cart-item/cart-item';
import { ICartListProps } from './cart-list.props';
import styles from './cart-list.module.scss';

export default function CartList({ cartItems, onClose }: ICartListProps): JSX.Element {
  const totalPrice = cartItems.reduce((sum, product) => sum + product.price * product.quantity, 0);
  return (
    <ul className={cn(styles.cartList, 'collection')}>
      <li className="collection-item active">
        Корзина
        {' '}
        <button
          type="button"
          className={cn(styles.buttonClose, 'secondary-content')}
          onClick={onClose}
        >
          <i className="material-icons">clear</i>
        </button>
      </li>
      {cartItems.length
        ? cartItems.map((product) => (<CardItem product={product} key={product.id} />))
        : <li className="collection-item">Корзина пуста, добавьте товары</li> }
      <li className="collection-item active">
        Общая стоимость:
        {' '}
        {totalPrice}
      </li>
    </ul>
  );
}
