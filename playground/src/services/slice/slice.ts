import { createSlice } from "@reduxjs/toolkit";

interface Task {
  id: number;
  title: string;
}

interface TaskState {
  tasks: Task[];
  loading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: TaskState = {
  tasks: [],
  loading: "idle",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask: Task = {
        id: state.tasks.length + 1,
        title: action.payload,
      };
      state.tasks.push(newTask);
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
const taskReducer = taskSlice.reducer;

export default taskReducer;
