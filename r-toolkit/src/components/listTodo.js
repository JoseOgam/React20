import { connect } from "react-redux"
const ListTodo = ({Todos}) => {
    return (
        <div>
            {
                Todos.map((todo,index) => {
                    return (
                        <div key={index}>
                            <div>

                                <h2>{index + 1}. { todo.title }</h2>
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