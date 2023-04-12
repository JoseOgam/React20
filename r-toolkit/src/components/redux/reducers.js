// import { createSlice } from "@reduxjs/toolkit"
import * as actionType from "./constant"
const initialState = {
    todos: [],
    title: "",
    description: "",
    error: ""
}

// const todosSlice = createSlice({
//     name: 'todos',
//     initialState,
//     reducers: {
//         addTodo(state = initialState, action) {
//              const newTask = {
//                 id: Date.now(),
//                 title: state.title,
//                 description: state.description
//              }
//             return {
//                 ...state,
//                 todos: state.todos.push(newTask),
//                 title: "",
//                 description: ""
                
//             }
//         },
//         addTitle(state, action) {
//             return {
//                 ...state,
//                 title: action.title
//             }
//          },
        
//         addDescription(state, action) { 
//             return {
//                 ...state,
//                 description: action.description
//             }

//         }
        
//     }
    
// })

// export const {addTodo,addTitle,addDescription} = todosSlice.actions
const todosSlice = (state = initialState, action) => {
    switch (action.type)
    {
        case actionType.ADD_TODO:
            
                const newTodo = {
                    id: Date.now(),
                    title: state.title,
                    description: state.description
                }
            return {
                ...state,
                todos: state.todos.concat(newTodo)
            }
        case actionType.TODO_TITLE:
            return {
                ...state,
                title: action.title
            }
        case actionType.ADD_DESCRIPTION:
            return {
                ...state,
                description: action.description
            }
        default:
            return state
    }
    
}
export default todosSlice