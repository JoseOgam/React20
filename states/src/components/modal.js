import { useSelector } from "react-redux"
import styles from "./Modal.module.css"
import {RiCloseLine} from "react-icons/ri"
const Modal = ({ setIsOpen }) => {
    const todos = useSelector((state) => {
        return state.todos
    })
    return (
        <div>
            <>
                <div className={ styles.darkBG } onClick={ () => setIsOpen(false) } />

                <div className={ styles.centered }>
                    
                    <div className={ styles.modal }>
                        
                        <div className={ styles.modalHeader }>
                            
                            <h5 className={ styles.heading }>Dialog</h5>
                            
                        </div>
                        
                        <button className={ styles.closeBtn } onClick={ () => setIsOpen(false) }>
                            
                            <RiCloseLine style={ { marginBottom: "-3px" } } />
                            
                        </button>
                        
                        <div className={ styles.modalContent }>

                            
                            <input placeholder="title" value={ todos.title } />
                            
                            <input placeholder="body" value={ todos.body } />
                            
                        </div>
                        
                        <div className={ styles.modalActions }>
                            
                            < div className={ styles.actionsContainer }>
                                
                                <button className={ styles.cancelBtn } onClick={ () => setIsOpen(false) } >
                                    
                                Cancel
            
                                </button>

                        < button className={styles.updateBtn} onClick={() => setIsOpen(false)}>
                                    Update
                                    
                                </button>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
            </div>
            </>
        </div>
    )
}

export default Modal