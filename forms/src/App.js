import './App.css'
import {useState} from "react"
const App = () => {
  const [formData, setFormData] = useState([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cssComp, setCssComp] = useState("")
  const [message, setMessage] = useState("")
  
  // add form Data
  const addFormData = (e) => {
    e.preventDefault()
    setFormData([...formData, name, email, cssComp, message])
      console.log(formData)
  
    // clears form
    // setName("")
    // setEmail("")
    // setCssComp("")
    // setMessage("")
    
    
  }

  return (
    <div>
      <h1>HELLO REACT FORMS</h1>

    <form onSubmit={addFormData}>
    <div>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div>
      <label htmlFor="comp">Favorite CSS Compiler</label>
      <select id="comp" value={cssComp} onChange={(e)=>setCssComp(e.target.value)}>
        <option value="sass">Sass</option>
        <option value="less">Less</option>
        <option value="stylus">Stylus</option>
        <option value="postcss">PostCSS</option>
        <option value="other">Other</option>
      </select>
    </div>
    <div>
      <fieldset>
        <legend>Are you familiar with CSS Grid?</legend>
        <input type="radio" name="grid" id="yes" value="yes" />
        <label htmlFor="yes">Yes</label>
        <input type="radio" name="grid" id="no" value="no" />
        <label htmlFor="no">No</label>
      </fieldset>
    </div>
    <div className="full-width">
      <label htmlFor="message">Message</label>
      <textarea id="message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
    </div>
    <div className="full-width">
      <input type="checkbox" id="newsletter" />
      <label htmlFor="newsletter">Receive our newsletter?</label>
    </div>
    <div className="full-width">
      <button type="submit">Send Response</button>
      <button type="reset">Clear Form</button>
    </div>
  </form>
    </div>
  )
}

export default App