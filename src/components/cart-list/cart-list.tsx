import React from 'react';
import CardItem from '../cart-item/cart-item';
import { ICartListProps } from './cart-list.props';

export default function CartList({ cartItems }: ICartListProps): JSX.Element {
  const totalPrice = cartItems.reduce((sum, product) => sum + product.price * product.quantity, 0);
  return (
    <ul className="collection">
      <li className="collection-item active">Корзина</li>
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
