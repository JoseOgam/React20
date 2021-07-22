import React, { useReducer } from "react"
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
    
    return (<div>
        <h1>Task App</h1>
        <ListTask tasks={ tasks } remove={remove }/>
        <AddTask dispatch={ dispatch }/>
    
    </div>)
}

export default App;