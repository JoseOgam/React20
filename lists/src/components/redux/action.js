import * as actionType from './constants'

export const addTask = () => {
    return {
        type: actionType.ADD_TASK
    }
}

export const setTitle = (title) => {
    return {
        type: actionType.SET_TITLE,
        title: title
    }
}

export const setBody = (body) => {
    return {
        type: actionType.SET_BODY,
        body: body
    }
}