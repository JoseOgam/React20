import { Route } from "react-router-dom";
import App from "../App";
import Book from "../components/book/BookPage";
import About from "../components/common/AboutPage";
import Home from "../components/common/HomePage";
const Routes = () => {
    return (<div>
        <Route path="/" component={App}>
        <Route component={ Home }></Route>
        <Route path="/about" component={ About }></Route>
        <Route path="/books" component={Book}></Route> 
    </Route>
    </div>)
}
export default Routes