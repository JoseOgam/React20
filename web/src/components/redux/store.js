import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./features/todoSlice";

const store = configureStore({
  reducer: {
    TODO: todoReducers,
  },
});

export default store;
