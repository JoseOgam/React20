import {createSlice} from "@reduxjs/toolkit"

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: [],
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: new Date(),
                title: action.payload.title,
                body: action.payload.body
            }
             state.push(newTask)
        },
        todoTogle: {
            
        },

        deleteTask: (state, action) => {
            return state.filter((item)=> item.id !== action.payload.id)
        }
    }


})

export const { addTask, deleteTask, todoTogle } = tasksSlice.actions

const taskReducers = tasksSlice.reducer
export default taskReducers