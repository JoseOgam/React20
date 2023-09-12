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
  },
});
export const { addTask, deleteTask } = taskSlice.actions;
const taskReducer = taskSlice.reducer;
export default taskReducer;
