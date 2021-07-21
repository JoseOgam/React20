let reducer = (state, action) => {
    switch (action.type)
    {
        case "SHOW_TASKS":
            return action.tasks;
        case "ADD_TASK":
            return [...state, { title: action.title, body: action.body }];
        case "REMOVE":
            return state.filter((task) => task.title !== task.title);
        default:
            return state;
    }
    
}
export default reducer;