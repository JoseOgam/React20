import TaskList from "./task"
const List = (props) => {
  return (props.tasks.map((task) => {
    return (
        <div>
         <TaskList task={task} />
        </div>
    )
  }))
}

export default List