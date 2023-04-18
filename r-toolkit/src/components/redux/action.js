import * as actionType from "./constant"

export const addTodo = (payload) => {
    return {
        type: actionType.ADD_TODO,
        payload
    }
}

export const todoTitle = (title) => {
    return {
        type: actionType.TODO_TITLE,
        title: title
    }
}

export const addDescription = (description) => {
    return {
        type: actionType.ADD_DESCRIPTION,
        description: description
    }
}

export const removeTodo = () => {
    return {
        type: actionType.REMOVE_TODO
    }
}

export const showTodo = () => {
    return {
        type: actionType.SHOW_TODO
    }
}

export const setError = () => {
    return {
        type: actionType.SET_ERROR
    }
}
