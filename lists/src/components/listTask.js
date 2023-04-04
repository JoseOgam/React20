import { connect } from "react-redux"
import * as actionType from "./redux/action"
const ListTask = ({ listTasks, removeTask }) => {
      return (<div>
        {
            !listTasks.length ? <p>No data to display</p> : (<div>
                {
                    listTasks.map((task, index) => {
                        return (
                            <div key={index}>
                                <h2>{index + 1}. { task.title }</h2>
                                <p>{ task.body }</p>
                                <button onClick={removeTask}>Delete</button>
                            </div>
                        )
                    })
                }
            </div>)
        }
    </div>)
    
    
}

const mapStateToProps = (state) => {
    return {
        listTasks: state.tasks
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        removeTask:(title)=>dispatch(actionType.removeTask(title))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);