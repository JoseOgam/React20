import './App.css';
import { useState } from 'react';
import ReactModal from './components/modal';


function App() {
  const [isOpen, setIsOpen] = useState(false)
  function toggleModal() {
    setIsOpen(!isOpen)
  }
  return (
    <div className="container">
    <button onClick={toggleModal} >open modal</button>
      <ReactModal toggleModal={toggleModal} isOpen={isOpen} />
    </div>
  );
}

export default App;
