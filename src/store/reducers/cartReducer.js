import { types } from "../types";

const defaultState = {
  products: [],
  totalPrice: 0,
};

export const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.cart.ADD:
      return Object.assign({}, state, {
        products: [action.payload].concat(state.products),
        totalPrice: state.totalPrice + Math.round(action.payload.price),
      });

    case types.cart.REMOVE:
      return Object.assign({}, state, {
        products: state.products.filter((item) => item.id !== action.payload.id),
        totalPrice: state.totalPrice - Math.round(action.payload.price),
      });

    default:
      return state;
  }
};
