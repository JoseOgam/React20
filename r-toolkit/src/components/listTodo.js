import { connect } from "react-redux"
import "./components.css"
const ListTodo = ({Todos}) => {
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
                                <button>Delete</button>
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

export default connect(mapStateToProps)(ListTodo)