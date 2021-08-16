import *  as actionType from '../constants'

let initialState = {
    tasks: [],
    title: "",
    body: "",
    error: ""
}

let reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case actionType.SHOW_TASKS:
            return {
                ...state,
                tasks: action.tasks
            };
        case actionType.ADD_TASK:
            const newTask = {
                id: Date.now(),
                title: state.title,
                body: state.body
            }
            return {
                ...state,
                tasks: state.tasks.concat(newTask),
                title: "",
                body: ""
            
            };
        case actionType.SET_TITLE:
            return {
                ...state,
                title: action.title
            };
        case actionType.SET_BODY:
            return {
                ...state,
                body: action.body
            };
        case actionType.SET_ERROR:
            return {
                ...state,
                error: action.error
            }
         case actionType.REMOVE:
            return {
                ...state,
                tasks:[...state.filter((task) => task.title !== action.title)]
            }
        default:
            return state;
    }
       
}

export default reducer;