import cn from 'classnames';
import React from 'react';
import styles from './product.module.scss';
import { IProductProps } from './product.props';

export default function Product({ product, addToCart }: IProductProps): JSX.Element {
  const {
    name, description, image, price,
  } = product;

  return (
    <div className={cn(styles.card, 'card')}>
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className={cn(styles.content, 'card-content')}>
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          type="button"
          className="btn"
          onClick={() => addToCart(product)}
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          {price}
          {' '}
          руб.
        </span>
      </div>
    </div>
  );
}
