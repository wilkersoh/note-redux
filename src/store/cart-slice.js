import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;

      if (!existingItem) {
        // 在 toolkit 可以 push 而不會 更改現在的state
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        //  exist the item + quatity;
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;

      const existingItem = state.items.find((item) => item.id === id);

      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});



// Middlewware
// A functuon return another function （ 那個 async dispatch ）
// How to use it ?
// dispatch(sendCartData(cart))
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

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
