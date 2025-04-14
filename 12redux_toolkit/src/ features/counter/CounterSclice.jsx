import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // these all are action:-
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => { // action made 
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount ,reset} = counterSlice.actions;

export default counterSlice.reducer;
