import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTask);
    },
    toggleTask: (state, action) => {},
    deleteTask: (state, action) => {},
  },
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;
const taskReducer = taskSlice.reducer;

export default taskReducer;
