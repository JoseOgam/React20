import {useState} from 'react'
const App = () => {
  let [counter, setCounter] = useState(0)
  const add = () => setCounter(counter + 1)
  const remove = () => setCounter(counter - 1)
  const reset =()=>setCounter(0)
  return (<div>
    <h1>Recap App</h1>
    <div>
      <h2>{counter}</h2>
    </div>
    <div>
      <button onClick={add}>ADD</button>
    <button onClick={reset}>RESET</button>
    <button onClick={remove}>REMOVE</button>
    </div>
  </div>)
}

export default App;
