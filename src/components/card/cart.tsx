import React, { useState } from 'react';
import cn from 'classnames';
import styles from './cart.module.scss';
import Popup from '../popup/popup';
import CartList from '../cart-list/cart-list';

export default function Cart(): JSX.Element {
  const [isOpenCart, setIsOpenCart] = useState(false);

  return (
    <>
      <div
        className={cn(styles.cart, 'deep-purple darken-4 white-text')}
      >
        <i className="material-icons">shopping_cart</i>
        <span>0</span>
      </div>
      <Popup isOpened={isOpenCart}>
        <p>попап</p>
      </Popup>
    </>
  );
}
