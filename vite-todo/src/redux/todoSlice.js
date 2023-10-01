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
  },
});

export const { addTodo } = todoSlice.actions;

const todoReducer = todoSlice.reducer;
export default todoReducer;
