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

            return Object.assign({},{
              
                todos: state.todos.concat(newItem),
                title: "",
                error: ""
            });
        case actionTypes.SET_TITLE:
            return Object.assign({},state,{
           
                title: action.title
            });
        case actionTypes.REMOVE_TODOS:
            return Object.assign({},state,{
                todos: state.todos.filter((todo) => todo.id !== action.id)
                
            })
        case actionTypes.SET_ERROR:
            return Object.assign({},state,{
              
                error: action.error
            }
        )
        default:
            return state;
    }
}

export default reducer;