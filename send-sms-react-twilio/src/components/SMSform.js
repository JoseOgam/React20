import {useState} from 'react'
const SMSform = () => {
    const [message, setMessage]=useState([])
    const [phone, setPhone]= useState([])
    const [body, setBody] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    return (<div>
        <h2>Send text with Twilio</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="to">To:</label>
                <input
                    type="tel"
                    name="phone"
                    value={ phone }
                    onChange={(e)=>setPhone(e.target.value)}
                
                />
           </div>
            <div>
                <label htmlFor="Body">Body:</label>
                <textarea
                    type="text"
                    name="body"
                    value={ body }
                    onChange={(e)=>setBody(e.target.value)}
                />
            </div>
            <div>
                <button>send message</button>
            </div>
        </form>
    </div>)
}

export default SMSform;