import { Link } from "react-router-dom"

const Home =()=>{
    return(
         <div>
        <div>
            <div>
                <Link to="/contact">
                    Contact page
                </Link>
                <Link to="/about">
                    About page
                </Link>
            </div>
          <h2>
            This is Home
          </h2>
        </div>
    </div>
    )
}
 export default Home