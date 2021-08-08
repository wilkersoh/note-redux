// import {createStore} from "react"
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counterValue: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counterValue++;
    },
    decrement(state) {
      state.counterValue--;
    },
    incrementNumber(state, action) {
      state.counterValue = state.counterValue + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// const store = createStore(counterSlice.reducer);

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  },
});

// const store = configureStore({
//   reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
// });

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
