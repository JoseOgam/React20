import About from "./components/about";
import Contact from "./components/contacts";
import Feedback from "./components/feedback";
import Home from "./components/home";
import { Routes, Route } from 'react-router-dom';
function App() {
  return(
     <div className="App">
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="contact" element={< Contact />} />
        <Route path="about" element={< About />}>
          <Route to="feedback" element={< Feedback />}/>
        </Route>
        <Route path="*" element={<h2>404 error the page you looking does not exist</h2>} />
      </Routes>
     </div>
  )
  
}

export default App;
