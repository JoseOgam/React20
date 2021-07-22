import React, { useEffect, useReducer } from "react"
import AddTask from "./addTask"
import ListTask from "./listTask"
import reducer from "./reducer/reducer"

const App = () => {
    let [tasks, dispatch] = useReducer(reducer, [])
    let remove = (title) => {
        dispatch({
            type: "REMOVE",
            title
        })
    }
    
    useEffect(() => {
        let taskInfo = JSON.parse(localStorage.getItem('tasks'));
        if (taskInfo)
        {
            dispatch({
                type: "SHOW_TASKS",
                tasks: taskInfo
            })
        }
    },[]);
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])
    
    return (<div>
        <h1>Task App</h1>
        <ListTask tasks={ tasks } remove={remove }/>
        <AddTask dispatch={ dispatch }/>
    
    </div>)
}

export default App;