import { call, put, select, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { addToCartSuccess, updateAmount } from './actions';
import { formatPrice } from '../../../utils/format';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  if (productExists) {
    const productAmount = productExists.amount + 1;
    yield put(updateAmount(id, productAmount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
