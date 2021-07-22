import React, { useEffect, useReducer } from "react"
import AddTask from "./components/addTask"
import ListTask from "./components/listTask"
import reducer from "./components/reducer/reducer"
import './components/styles/styles.scss'
const App = () => {
    let [tasks, dispatch] = useReducer(reducer, [])
    let removeTask = (title) => {
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
    
    return (<div className="container">
        <h1>Task App</h1>
       
        <AddTask dispatch={ dispatch } />
         <ListTask tasks={ tasks } removeTask={removeTask }/>
    
    </div>)
}

export default App;