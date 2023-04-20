import {createSlice} from "@reduxjs/toolkit"

export const tasksSlice = createSlice({
    name: "todos",
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
        updateTodo:(state, action) =>{
            const { id, title, body } = action.payload
            const todo = state.find((todo) => todo.id === id)
            if (todo)
            {
                todo.title = title
                todo.body = body
            }
        },

        deleteTask: (state, action) => {
            return state.filter((item)=> item.id !== action.payload.id)
        }
    }


})

export const { addTask, deleteTask, updateTodo } = tasksSlice.actions

const taskReducers = tasksSlice.reducer
export default taskReducers