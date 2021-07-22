import Task from "./task";

const ListTask = (props) => {
    return props.tasks.map((task, index) => {
        return (
            <div key={index} className="ListTask"><Task
            key={index}
            task={ task }
            onDelete={ props.removeTask }
            index={ index + 1 }
            
        /> </div>)
    })
}

export default ListTask;