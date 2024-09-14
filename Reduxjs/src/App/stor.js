import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/countuer/counterSlice";

const stor = configureStore({
  reducer: {
    counters: counterReducer,
  },
});
export default stor;
