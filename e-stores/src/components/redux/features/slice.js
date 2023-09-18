import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      let newTask = {
        id: Date.now(),
        task: action.payload.task,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    editTask: (state, action) => {
      const tasks = state;
      return tasks.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      // console.log(newUpdate);
    },
  },
});
export const { addTask, deleteTask, editTask } = taskSlice.actions;
const taskReducer = taskSlice.reducer;
export default taskReducer;
