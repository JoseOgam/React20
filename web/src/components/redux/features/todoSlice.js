import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "TODO",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      let newTodo = {
        id: Date.now(),
        title: action.payload.title,
        body: action.payload.body,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.todos.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
const todoReducers = todoSlice.reducer;

export default todoReducers;
