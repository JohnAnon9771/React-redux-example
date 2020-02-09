import React, { useState, useEffect } from 'react';

import { MdShoppingCart } from 'react-icons/md';
import api from '../../services/api';

import { formatPrice } from '../../utils/format';

import { ProductList } from './styles';

export default function Home() {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        price: formatPrice(product.price),
      }));
      setProduct(data);
    }
    getProducts();
  }, []);

  return (
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt="" />
          <strong>{product.title}</strong>
          <span>{product.price}</span>

          <button type="button">
            <div>
              <MdShoppingCart size={16} color="#fff" /> 3
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
