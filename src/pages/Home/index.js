import React from 'react';

import { MdShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_detalhe1.jpg?resize=280:280"
          alt=""
        />
        <strong>Tênis muito show</strong>
        <span>R$129,00</span>

        <button type="button">
          <div>
            <MdShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
