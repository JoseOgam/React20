import { connect } from "react-redux"

const ListTask = (listTasks) => {
      return (<div>
        {
            !listTasks.length ? <p>No data to display</p> : (<div>
                {
                    listTasks.map((task, index) => {
                        return (
                            <div key={ task.id }>
                                <h2>{index + 1}. { task.title }</h2>
                                <p>{ task.body }</p>
                                <button>Delete</button>
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

export default connect(mapStateToProps)(ListTask);