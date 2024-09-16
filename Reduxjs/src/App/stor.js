import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/countuer/counterSlice";
import postReducer from "../features/post/postSlice";

const stor = configureStore({
  reducer: {
    counters: counterReducer,
    post: postReducer,
  },
});
export default stor;
