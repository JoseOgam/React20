import { connect } from "react-redux"

const TodoList = ({todoList}) => {
    
    return (<div>
        {
            !todoList.length ? <h1>no data to display</h1> : (
                <div>
                    { todoList.map((todo, index) => {
                        return (
                            <div key={todo.id}>
                                  <h3>{index + 1}. {todo.value}</h3>
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
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (TodoList)