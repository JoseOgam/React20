import { useState } from 'react';
import Modal from 'react-modal'
const ReactModal = (props) => {
    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
     }
    const handlePassword = (e) => {
        setPassword(e.target.value)
     }
    const addUsers = (e) => {
        e.preventDefault()
        setUsers([...users, { name, email, password }])
        setName('')
        setEmail('')
        setPassword('')
        props.toggleModal()
    
    }
    return (
        <div>
            <Modal
              className="container"
            isOpen={props.isOpen}
                onRequestClose={ props.toggleModal }
                ariaHideApp={false}
                contentLabel="My dialog">
       <div className="container">
        <h2>Create an Account</h2>
        <form >
            <div className="form-control">
             
                <input value={name} onChange={handleName} type="text"  placeholder="Name"/>
            </div>
            
             <div className="form-control">
           
                <input value={email} onChange={handleEmail} type="email" placeholder="Email"/>
            </div>
             <div className="form-control">
             
                <input value={password}  onChange={handlePassword} type="password"  placeholder="Password"/>
            </div>
            <div className="hint">Password must be at least 6 characters long.</div>
            <div>
                <button type="button" onClick={props.toggleModal}>Cancel</button>
                <button type="button" onClick={addUsers} >Submit</button>
            </div>
        </form>
    </div>
        
    </Modal>
        </div>
    )
}

export default ReactModal;