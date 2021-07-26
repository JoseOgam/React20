import React, { useState } from 'react'
import { ADD_TASK } from './redux/constants'
let AddTask = (props) => {
    let [title, setTitle] = useState('')
    let [body, setBody] = useState('')
    let addTask = (e) => {
        e.preventDefault()
        props.dispatch({
            type: ADD_TASK,
            title,
            body
        })
        setTitle('');
        setBody('');
    }
    return (<div>
        <form className="add-option" onSubmit={addTask}>
            <input className="add-option__input" value={title} placeholder="what to do!!" onChange={(e)=>setTitle(e.target.value)} />
            <textarea className="add-option__input" value={body} placeholder="comment" onChange={(e)=>setBody(e.target.value)} />
            <button className="button">Submit</button>
        </form>
    </div>)
}

export default AddTask;