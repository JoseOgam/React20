import { connect } from 'react-redux'
import * as actionTypes from '../redux/actions'
const Form = ({title, error, todos, setTitle, setError, addTodos}) => {
    const handleChange = (e) => {
        const title = e.target.value
        setTitle(title)
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title)
        {
           setError("please enter title")
        } else
        {
            addTodos()
            setTitle('')
        }
     
    }
    

    return (
        <div>
            <p>{error}</p>
            <form onSubmit={handleSubmit}>
                <input value={title} onChange={handleChange} placeholder="title" />
                <button>add Todo</button>
            </form>
        </div>
    )
}
const mapStateToProps = (state) => {
  return {
    title: state.title,
    error: state.error,
    todos:state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      setTitle: (title) => dispatch(actionTypes.setTitle(title)),
      setError: (error) => dispatch(actionTypes.setError(error)),
      addTodos: ()=> dispatch(actionTypes.addTodos())
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (Form);