import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";
import uiReducer from "./ui-slice"
import cartSliceReducer from "./cart-slice";


const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    ui: uiReducer,
    cart: cartSliceReducer,
  },
});

export default store;
