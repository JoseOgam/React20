import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],

  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        body: action.payload.body,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter(
        (item) => item.id !== action.payload.id,
        console.log(action.payload.id)
      );
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
const todoReducers = todoSlice.reducer;

export default todoReducers;
