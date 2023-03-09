import { useEffect, useState } from 'react'
import List from './list'
const AddTask=()=> {
  const [tasks, setTask] = useState([])
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  // add task
  const addTask = (e) => {
    e.preventDefault()
    setTask([...tasks, title, body])
    setTitle("")
    setBody("")

  }

  const handleOnChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const handleOnChangeBody = (e) => {
    setBody(e.target.value)
  }

  //set items into localStorage
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])
  return (
    <div>
      <form onSubmit={ addTask }>
        <div>
          <label>Title</label>
          <input type="text" value={ title } onChange={ handleOnChangeTitle } />
        </div>
        <div>
          <label>Body</label>
          <textarea value={ body } onChange={ handleOnChangeBody } ></textarea>
        </div>
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
      <List tasks={tasks} />
    </div>
  );
}

export default AddTask;
