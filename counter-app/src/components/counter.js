import { useState } from "react"

const Counter = ()=> {
    const [counter, setCounter] = useState(0)
    const add = () =>{
        setCounter(counter + 1)
    }
    const reset = () =>{
        setCounter(0)
    }

    const remove = () =>{
        setCounter(counter - 1)
    }
    return(
        <div>
            <h1>Counter App</h1>
            <h3>React App...</h3>
            <div>{counter}</div>
            <div>
                <button onClick={add}>+</button>
                <button onClick={reset}>reset</button>
                <button onClick={remove}>-</button>
            </div>
        </div>
    )
}

export default Counter