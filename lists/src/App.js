import { useEffect, useReducer } from "react";
import AddTask from "./components/addTask";
import ListTask from "./components/listTask";
import reducer from "./components/redux/reducer/reducer";

const App = () => {
  const [tasks, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    let taskInfo = JSON.parse(localStorage.getItem("tasks"));
    if (taskInfo)
    {
      dispatch({
        type: "SHOW_TASKS",
        tasks: taskInfo
      })
    }
  },[])
  
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])
  
  return (
    <div>
      <ListTask tasks={tasks} />
      <AddTask dispatch={dispatch} />
    </div>
  );
}


export default App;
