import { types } from "../types";

export const addToCart = (product) => (dispatch) => {
  dispatch({
    type: types.cart.ADD,
    payload: product,
  });
};

export const removeFromCart = (product) => (dispatch) => {
  dispatch({
    type: types.cart.REMOVE,
    payload: product,
  });
};
