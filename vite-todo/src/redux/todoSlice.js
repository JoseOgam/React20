import { createSlice } from "@reduxjs/toolkit";
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    completed: false,
  },
  reducers: {
    addTodo: (state, action) => {
      const createTodo = {
        id: Date.now(),
        todo: action.payload.newTodo,
      };
      state.todos.push(createTodo);
    },
    removeTodo: (state, action) => {
      const todoIdDelete = action.payload.id;
      state.todos = state.todos.filter((todo) => todo.id !== todoIdDelete);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

const todoReducer = todoSlice.reducer;
export default todoReducer;
