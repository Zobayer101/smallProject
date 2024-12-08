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
        Incremant2: (state,action) => {
            state.counter2+=action.payload.value;
        },
        Dicremant2: (state,action) => {
            state.counter2-=action.payload.value;
        },
       

  }
});

export default counterSlice.reducer;
export const { Incremant, Dicremant, Incremant2, Dicremant2 } = counterSlice.actions;