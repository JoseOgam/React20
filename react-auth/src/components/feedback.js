import { Link } from "react-router-dom"

const Feedback =()=>{
    return(
         <div>
            <div>
                <Link to="/">
                    Home page
                </Link>
                <Link to="/about">
                    About page
                </Link>
            </div>
        <div>
            <h3>
                This is Feedback section
            </h3>
        </div>
     </div>
    )
}
export default Feedback