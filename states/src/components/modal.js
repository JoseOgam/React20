// import { useSelector } from "react-redux"
import styles from "./Modal.module.css"
// import FormInputs from "./formIputs"
const Modal = ({ setIsOpen }) => {
    // const todos = useSelector((state) => {
    //     return state.todos
    // })
   

    return (
        <div>
            <>
                <div className={ styles.darkBG } onClick={ () => setIsOpen(false) } />

                <div className={ styles.centered }>
                    
                    <div className={ styles.modal }>
                        
                        <div className={ styles.modalHeader }>
                            
                            <h5 className={ styles.heading }>Update your Todos</h5>
                            
                        </div>
                        
                        <div className={ styles.modalContent }>
                        
{/* 
                            
                            {
                                todos.map((todo, index) => (
                                    <FormInputs key={index} id={todo.id} title={todo.title} body={todo.body} setIsOpen={setIsOpen}/>
                                ))
                           } */}
                             <form>
                <div>
                    <input placeholder="title"  />
                </div>
                            
                <div>
                     <input placeholder="body"  />
            </div>
            <div className={ styles.modalActions }>
                < div className={ styles.actionsContainer }>
                    <button className={ styles.cancelBtn } onClick={ () => setIsOpen(false) } >
                        Cancel
                    </button>
                    < button className={ styles.updateBtn } onClick={ () => setIsOpen(false) } >
                        Update
                    </button>
                </div>
            </div>
             </form>
                            
                        </div>
                        
                    </div>
                    
            </div>
            </>
        </div>
    )
}

export default Modal