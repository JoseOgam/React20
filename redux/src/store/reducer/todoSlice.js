import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "TODO",
  initialState: {
    todoList: [
      { id: 1, content: "Hit the gym" },
      { id: 2, content: "Meet Gearge" },
    ],
  },
  reducers: {
    addTodo: (state, action) => {
      let newTodoList = {
        id: Date.now(),
        content: action.payload.newContent,
      };
      state.todoList.push(newTodoList);
    },
    deleteTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

//acttion creators are generated for each case reducer function

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
const todoReducer = todoSlice.reducer;
export default todoReducer;
