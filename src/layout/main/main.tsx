import React, { useEffect, useState } from 'react';
import { API_KEY, API_URL } from '../../config';

export function Main(): JSX.Element {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY as string,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.shop) {
          setProducts(data.shop);
        }

        setIsLoading(false);
      });
  }, []);

  return (
    <main className="container main">
      {isLoading
        ? <p>Loading</p>
        : <p>{products.length}</p>}
    </main>
  );
}
