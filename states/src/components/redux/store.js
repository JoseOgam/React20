import { configureStore } from "@reduxjs/toolkit";
import taskReducers from "./tasksSlice";

const store = configureStore({
    reducer: {
        todos: taskReducers
    }
})

export default store
