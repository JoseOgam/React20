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
        <form className="add-option" onSubmit={addTask}>
            <input className="add-option__input" value={title} placeholder="title" onChange={(e)=>setTitle(e.target.value)} />
            <textarea className="add-option__input" value={body} placeholder="body" onChange={(e)=>setBody(e.target.value)} />
            <button className="button">Submit</button>
        </form>
    </div>)
}

export default AddTask;