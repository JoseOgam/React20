import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "TODO",
  initialState: {
    todoList: [
      { id: 1, content: "Hit the gym" },
      { id: 1, content: "Meet Gearge" },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      let newTodoList = {
        id: Math.random(),
        content: action.payload.newContent,
      };
      state.todoList.push(newTodoList);
    },
    deleteTodo: (state, action) => {},
    editTodo: (state, action) => {},
  },
});

//acttion creators are generated for each case reducer function

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
