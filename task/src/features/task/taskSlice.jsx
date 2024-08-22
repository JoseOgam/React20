import { createSlice } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

export const taskSlice = createSlice({
  name: "task",
  initialState: loadFromLocalStorage(),
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    toggleTask: (state, action) => {
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
      localStorage.setItem("tasks", JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const updatedState = state.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(updatedState));
      return updatedState;
    },
  },
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;
const taskReducer = taskSlice.reducer;

export default taskReducer;
