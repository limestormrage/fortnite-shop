import React, { useState } from 'react';
import cn from 'classnames';
import styles from './cart.module.scss';
import Popup from '../popup/popup';
import CartList from '../cart-list/cart-list';
import { ICartProps } from './cart.props';

export default function Cart(
  {
    currentProduct, deleteFromCart, incQuantity, decQuantity,
  }: ICartProps,
): JSX.Element {
  const [isOpenCart, setIsOpenCart] = useState(false);

  const handleCloseCart = (): void => {
    setIsOpenCart(false);
  };

  const totalCountProducts = currentProduct.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <>
      {!isOpenCart && (
      <button
        type="button"
        className={cn(styles.cart, 'deep-purple darken-4 white-text')}
        onClick={() => setIsOpenCart(true)}
      >
        <i className="material-icons">shopping_cart</i>
        <span>{totalCountProducts}</span>
      </button>
      )}
      { isOpenCart && (
      <Popup onClose={handleCloseCart}>
        <CartList
          cartItems={currentProduct}
          onClose={handleCloseCart}
          deleteFromCart={deleteFromCart}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      </Popup>
      )}
    </>
  );
}
