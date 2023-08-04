import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducer/todoSlice";

export default configureStore({
  reducer: {
    TODO: todoReducer,
  },
});
