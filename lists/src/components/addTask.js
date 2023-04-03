import { connect } from "react-redux"
import * as actionType from "./redux/action"

const AddTask = ({ addTask,title,body,setTitle,setBody, error , setError}) => {

    const handleOnChangeTitle = (e) => {
        const title = e.target.value;
        setTitle(title)
    }
    const handleOnChangeBody = (e) => {
        const body = e.target.value
        setBody(body)
    }

    let onSubmit = (e) => {
        e.preventDefault()
        if (!title && !body)
        {
            setError("Please provide all fields")
        } else
        {
           
            addTask()
            setError("")    
        }
        setTitle("")
        setBody("")

    }

    return (<div>
             <h1>{error}</h1>

        <form onSubmit={onSubmit}>
            <div>
                <label>Title</label>
               <input  placeholder="what to do!!" value={title} onChange={handleOnChangeTitle} />
            
            </div>
            <div>
                <label>body</label>
                <input type="text" value={body} onChange={handleOnChangeBody} />
            </div>
            <div>
                <button type="submit">ADD</button>
            </div>
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
       setError:(error)=>dispatch(actionType.setError(error))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AddTask);
