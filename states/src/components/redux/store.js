import { configureStore } from "@reduxjs/toolkit";
import taskReducers from "./tasksSlice";

const store = configureStore({
    reducer: {
        tasks: taskReducers
    }
})

export default store