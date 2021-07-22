const Task = (props) => {
    return (<div>
        <div>
            <h3>{props.index}. { props.task.title }</h3>
        </div>
        <div>
            <p>{ props.task.body }</p>
        </div>
        <button onClick={()=>props.remove(props.task.title)}>Delete</button>
    </div>)
 }
export default Task;