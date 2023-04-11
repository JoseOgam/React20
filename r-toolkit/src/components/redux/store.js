import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "./reducers";

const store = configureStore({
    reducer: todosSlice

})
export default store