import React from 'react'
import { connect } from 'react-redux'
import * as actionType from './redux/actions'

let AddTask = ({title,body,addTask,setBody,setTitle, setError, error}) => {
  
    const handleOnChangeTitle = (e) => {
        const title = e.target.value;
        setTitle(title)
    }
    const handleOnChangeBody = (e) => {
        const body = e.target.value
        setBody(body)
    }
    
    const OnSubmit = (e) => {
        e.preventDefault()
        if (!title && !body)
        {
            setError('please provide all the fields')
        } else
        {
            addTask()
            setError('')
        }
        setTitle('')
        setBody('')
      
    }
    return (<div>
             <h1>{error}</h1>
        <form className="add-option" onSubmit={OnSubmit}>
            <input className="add-option__input" value={title} placeholder="what to do!!" onChange={handleOnChangeTitle} />
            <textarea className="add-option__input" value={body} placeholder="comment" onChange={handleOnChangeBody} />
            <button className="button">Submit</button>
        </form>
    </div>)
}
const mapStateToProps = (state) => {
    return {
        title: state.title,
        body: state.body,
        error: state.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTask: () => dispatch(actionType.addTask()),
        setTitle: (title) => dispatch(actionType.setTitle(title)),
        setBody: (body) => dispatch(actionType.setBody(body)),
        setError: (error)=>dispatch(actionType.setError(error))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddTask);