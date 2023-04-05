import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    todos: [],
    title: "",
    description: "",
    error: ""
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state = initialState, action) {
             const newTask = {
                id: Date.now(),
                title: state.title,
                description: state.description
             }
            return {
                ...state,
                todos: state.todos.concat(newTask),
                title: "",
                description: ""
                
            }
        },
        addTitle(state, action) {
            return {
                ...state,
                title: action.title
            }
         },
        
        adDescription(state, action) { 
            return {
                ...state,
                description: action.description
            }

        }
        
    }
})

export const {addTodo,addTitle,adDescription} = todosSlice.actions
export default todosSlice