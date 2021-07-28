import React from "react"
import AddTask from "./components/addTask"
import ListTask from "./components/listTask"
import * as actionType from '../src/components/redux/actions'
import './components/styles/styles.scss'
import { connect } from "react-redux"
const App = ({tasks, showTasks}) => {
    
    // useEffect(() => {
    //     let taskInfo = JSON.parse(localStorage.getItem('tasks'));
    //     if (taskInfo)
    //     {
    //         showTasks({
    //             tasks: taskInfo
    //         })
    //     }
    // },[]);
    // useEffect(() => {
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    // },[tasks])
    
    return (<div className="container">
        <h1>Task App</h1>
       
        <AddTask />
         <ListTask />
    
    </div>)
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        showTasks: ()=>dispatch(actionType.showTasks())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);