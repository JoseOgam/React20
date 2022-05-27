import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)

  const add = () => setCounter(counter + 1)
  const subtract = () => setCounter(counter - 1)
  const reset = () => setCounter(0)
  return (
    <div >
      <div>{counter}</div>
      <button onClick={add} >add</button>
      <button onClick={reset} >reset</button>
      <button onClick={subtract} >subtract</button>
    </div>
  );
}

export default App;
