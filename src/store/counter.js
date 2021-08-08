import { createSlice } from "@reduxjs/toolkit";

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
      console.log('state.showCounter :>> ', state.showCounter);
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
