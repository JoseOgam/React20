import * as actionType from "./redux/action"
import { connect } from "react-redux"

let Todos = ({addTodo,addTitle,addDescription,title,description }) => {
    const handleTitle = (e) => {
        const title = e.target.value
        addTitle(title)
        
    }
    const handleDescription = (e) => {
        const description = e.target.value
        addDescription(description)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        addTodo()
        addTitle("")
        addDescription("")
       
    }
    return (<div>
        <form onSubmit={onSubmit}>
            <div>
                 <input placeholder="todo" value={title} onChange={handleTitle} />
            </div>
            <div>
                <input placeholder="description" value={description} onChange={handleDescription} />
            </div>
            <div>
                <button>addTodo</button>
            </div>
            
        </form>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        description: state.description
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
         addTodo: ()=>dispatch(actionType.addTodo()),
        addTitle: (title) => dispatch(actionType.todoTitle(title)),
        addDescription: (description) => dispatch(actionType.addDescription(description)),
       
   }
    
}


export default connect(mapStateToProps,mapDispatchToProps)(Todos)