import React, { useState } from 'react'
let AddTask = (props) => {
    let [title, setTitle] = useState('')
    let [body, setBody] = useState('')
    let addTask = (e) => {
        e.preventDefault()
        props.dispatch({
            type: "ADD_TASK",
            title,
            body
        })
        setTitle('');
        setBody('');
    }
    return (<div>
        <form onSubmit={addTask}>
            <input value={title} placeholder="title" onChange={(e)=>setTitle(e.target.value)} />
            <textarea value={body} placeholder="body" onChange={(e)=>setBody(e.target.value)} />
            <button>Submit</button>
        </form>
    </div>)
}

export default AddTask;