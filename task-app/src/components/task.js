const Task = (props) => {
    return (
        <div className="ListTask">
        <div>
            <h3>{props.index}. { props.task.title }</h3>
        </div>
        <div>
            <p>{ props.task.body }</p>
        </div>
         <button onClick={() => props.onDelete(props.task.title)}>delete</button>
    </div>)
 }
export default Task;