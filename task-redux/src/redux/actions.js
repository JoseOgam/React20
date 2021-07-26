import * as actionTypes from './constants'

export const addTodos = () => {
    return {
        type: actionTypes.ADD_TODOS
    }
}
export const setTitle = (title) => {
    return {
        type: actionTypes.SET_TITLE,
        title: title
    }
}

export const showTodos = () => {
    return {
        type: actionTypes.SHOW_TODOS
    }
}

export const removeTodos = (todo) => {
    return {
        type: actionTypes.REMOVE_TODOS,
        todo: todo
    }
}

export const setError = (error) => {
    return {
        type: actionTypes.SET_ERROR,
        error: error
    }
}
