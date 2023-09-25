import { createSlice, createAction } from "@reduxjs/toolkit";

const initialState = {
  todos: ["codding"],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state: any, action) => {
      const newTodo = {
        id: Date.now(),
        todo: action.payload.todo,
      };
      state.todos.push(newTodo);
    },
  },
});

export const addTodo = createAction("todos/addTodo", (todo) => ({
  payload: todo,
}));
export const todoReducer = todoSlice.reducer;
