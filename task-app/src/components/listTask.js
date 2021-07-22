import Task from "./task";

const ListTask = (props) => {
    return props.tasks.map((task, index) => {
        return (
            <Task
            key={index}
            task={ task }
            onDelete={ props.removeTask }
            index={ index + 1 }
            
        />)
    })
}

export default ListTask;