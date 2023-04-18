import { connect } from "react-redux"
import * as actionType from "./redux/action"
import "./components.css"
const ListTodo = ({Todos, removeTodo}) => {
    return (
        <div>
            {
                Todos.map((todo,index) => {
                    return (
                        <div key={index} className="lists">
                            <div>

                                <p>{index + 1}. { todo.title }</p>
                            </div>
                            <div>
                                  <p>{ todo.description }</p>
                          </div>
                            
                            <div>
                                <button onClick={removeTodo}>Delete</button>
                          </div>
                        </div>
                    )
                })
         }
        </div>
    )
    

}

const mapStateToProps = (state) => {
    return {
     Todos: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodo:(title)=>dispatch(actionType.removeTodo(title))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ListTodo)