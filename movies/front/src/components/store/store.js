import { configureStore } from "@reduxjs/toolkit";
import moviesReducers from "./slice";

const store = configureStore({ reducer: { movies: moviesReducers } });
export default store;
