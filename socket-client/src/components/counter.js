import { useState } from "react"
const Counter = (props) => {
     const [counter, setCounter] = useState(0)

  const add = () => setCounter(counter + 1)
  const subtract = () => setCounter(counter - 1)
  const reset = () => setCounter(0)
    return (<div>
       <h1>This Is {props.name}</h1>

      <div>{counter}</div>
      <button onClick={add} >add</button>
      <button onClick={reset} >reset</button>
      <button onClick={subtract} >subtract</button>
    
    </div>)
}

export default Counter