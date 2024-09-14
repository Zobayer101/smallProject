import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  counter1: 10,
  counter2: 5,
};
const counterSlice = createSlice({
  name: "countuer",
    initialState: initalState,
    reducers: {
        Incremant: (state) => {
            state.counter1+=5;
        },
         Dicremant: (state) => {
            state.counter1-=5;
        },
        Incremant2: (state) => {
            state.counter2++;
        },
        Dicremant2: (state) => {
            state.counter2--;
        },
       

  }
});

export default counterSlice.reducer;
export const { Incremant, Dicremant, Incremant2, Dicremant2 } = counterSlice.actions;