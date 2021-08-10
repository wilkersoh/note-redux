import { createSlice } from "@reduxjs/toolkit";

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
          name: newItem.title
        });
      } else {
        //  exist the item + quatity;
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;

      const existingItem = state.items.find(item => item.id === id);

      state.totalQuantity--;

      if(existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
