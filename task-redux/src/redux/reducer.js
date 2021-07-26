import * as actionTypes from './constants'

let initialState = {
    todos: [],
    title:"",
    error: ""
}

let reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case actionTypes.ADD_TODOS:
            const newItem = {
                id: Date.now(),
                value: state.title
            }

            return {
                ...state,
                todos: state.todos.concat(newItem),
                title: "",
                error: ""
            };
        case actionTypes.SET_TITLE:
            return {
                ...state,
                title: action.title
            }
        
        default:
            return state;
    }
}

export default reducer;