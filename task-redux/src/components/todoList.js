import { connect } from "react-redux"
import * as actionTypes from '../redux/actions'
const TodoList = ({ todoList, removeTodos }) => {
    const deleteTodo = () => {
        removeTodos()
    }
    
    return (<div>
        {
            !todoList.length ? <h1>no data to display</h1> : (
                <div>
                    { todoList.map((todo, index) => {
                        return (
                            <div key={todo.id}>
                                <h3>{ index + 1 }. { todo.value }</h3>
                                <button onClick={deleteTodo}>Delete</button>
                          </div>
                        )
                    })}
                </div>
            )
        }
        
    </div>)
}

const mapStateToProps = (state) => {
    return {
        todoList: state.todos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeTodos: (todo)=> dispatch(actionTypes.removeTodos(todo))
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (TodoList)