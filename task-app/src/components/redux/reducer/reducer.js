import { SHOW_TASKS, ADD_TASK, REMOVE } from '../constants'

let initialState = []

let reducer = (state = initialState, action) => {
    switch (action.type)
    {
        case SHOW_TASKS:
            return action.tasks;
        case ADD_TASK:
            return [...state, { title: action.title, body: action.body }];
        case REMOVE:
            return state.filter((task) => task.title !== action.title);
        default:
            return state;
    }
    
}

export default reducer;