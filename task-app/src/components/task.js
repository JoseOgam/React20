const Task = (props) => {
    return (<div>
        <div>
            <h1>{props.index}. { props.task.title }</h1>
        </div>
        <div>
            <p>{ props.task.body }</p>
        </div>
        <button onClick={()=>props.remove(props.task.title)}>Delete</button>
    </div>)
 }
export default Task;