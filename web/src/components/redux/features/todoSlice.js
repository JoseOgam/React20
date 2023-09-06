import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "TODO",
  initialState: {
    todos: [{ title: "Coding", body: "Im building a react app" }],
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
    deleteTodo: () => {},
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
const todoReducers = todoSlice.reducer;

export default todoReducers;
