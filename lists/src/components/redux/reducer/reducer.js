import { combineReducers } from "redux";

const initialState = {
    tasks: [],
    title: "",
    body:""
}

let taskReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case "ADD_TASK":
            return [...state, { title: action.title, body: action.body }];
        case "SHOW_TASKS":
            return action.tasks
        default:
            return state
    }
}

const rootReducer = combineReducers({
    tasks:taskReducer,
})

export default  rootReducer