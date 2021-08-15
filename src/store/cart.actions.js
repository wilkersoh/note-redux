/**
 * Middlewware
 * 因為 用 toolkit 所以 能那樣寫 而不需要 下載 redux-thunk
 */

// A functuon return another function （ 那個 async dispatch ）
// How to use it ?
// dispatch(sendCartData(cart))

import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async () => {
      const res = await fetch("url");
      if(!res.ok) throw new Error("Could fetch data");

      const payload = await res.json();

      return payload;
    }

    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Fetching cart data fail'
      }))
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    // We run this before hit our reducer!! since Reducer cannot doing this kind of things.
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch("url", {
        method: "PUT",
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error("Error");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "Success",
          title: "Successful",
          message: "Sent cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "eroor",
          title: "Something wrong...",
          message: "Erro",
        })
      );
    }
  };
};
