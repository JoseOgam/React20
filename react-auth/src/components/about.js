import { Link } from "react-router-dom"
import {Outlet} from 'react-router-dom'

const About =()=>{
    return(
         <div>
            <div>
                <Link to="/">
                    Home page
                </Link>
                <Link to="/contact">
                    Contact page
                </Link>
            </div>
        <div>
            <h3>
                This is About section
            </h3>
        </div>
         <Outlet />
     </div>
    
    )
}
export default About