import Task from "./task";

const ListTask = (props) => {
    return props.tasks.map((task, index) => {
        return (
            <div className="ListTask"><Task
            key={ task.title }
            task={ task }
            remove={ props.remove }
            index={ index + 1 }
            
        /> </div>)
    })
}

export default ListTask;