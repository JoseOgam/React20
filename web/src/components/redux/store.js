import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "./features/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoReducers,
  },
});

export default store;
