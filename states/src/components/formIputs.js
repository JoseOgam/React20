// import { useState } from "react"
import { useDispatch } from "react-redux"
import styles from "./Modal.module.css"
import { addTask, updateTodo } from "./redux/tasksSlice"
import { useState } from "react"

const FormInputs = ({ id, title, body, setIsOpen }) => {

    const[updateTitle, setUpdateTitle]=useState(title)
    const [updateBody, setUpadteBody] = useState(body)
    
    const dispatch = useDispatch
      
    const handleUpdate = (e) => {
        e.preventDefault()

        dispatch(
            // updateTodo({
            //     id: id
            // }),
            addTask({
                title: updateTitle,
                body : updateBody
        })
        )
    }
    
    return (
        <div>
            <form>
                <div>
                    <input placeholder="title" value={updateTitle} onChange={(e)=>setUpdateTitle(e.target.value)} />
                </div>
                            
                <div>
                     <input placeholder="body" value={updateBody} onChange={(e)=>setUpadteBody(e.target.value)}  />
            </div>
            <div className={ styles.modalActions }>
                < div className={ styles.actionsContainer }>
                    <button className={ styles.cancelBtn } onClick={ () => setIsOpen(false) } >
                        Cancel
                    </button>
                    < button className={ styles.updateBtn } onClick={ handleUpdate }  >
                        Update
                    </button>
                </div>
            </div>
             </form>
        </div>
    )
}

export default FormInputs