import React from 'react';

export default function Product(): JSX.Element {
  return (
    <div className="card">
      <div className="card-image">
        <img src="https://mskkontrol.ru/assets/img/works/office.jpg" alt="офис" />
      </div>
      <div className="card-content">
        <span className="card-title">Имя товара</span>
        <p>Описание</p>
      </div>
      <div className="card-action">
        <button
          type="button"
          className="btn"
        >
          Купить
        </button>
        <span className="right" style={{ fontSize: '1.8rem' }}>
          цена
          {' '}
          руб.
        </span>
      </div>
    </div>
  );
}
