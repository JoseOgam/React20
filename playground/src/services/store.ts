import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slice/slice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

// 💡 THE FIX: Infer the absolute structural type map from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
