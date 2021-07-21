import React, { useReducer } from "react"
import AddTask from "./addTask"
import ListTask from "./listTask"
import reducer from "./reducer/reducer"

let App = () => {
    let [tasks, dispatch] = useReducer(reducer,[])
    return (<div>
        <h1>Task App</h1>
        <ListTask tasks={tasks} />
        <AddTask dispatch={dispatch}/>
    
    </div>)
}

export default App;