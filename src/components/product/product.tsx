import React from 'react';
import { IProductProps } from './product.props';

export default function Product({ product }: IProductProps): JSX.Element {
  const {
    name, description, image, price,
  } = product;

  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={name} />
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button
          type="button"
          className="btn"
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
