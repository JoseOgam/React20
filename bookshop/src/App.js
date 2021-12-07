
import React  from 'react';
import Header from './components/header/Header';
import {Routes,Route} from 'react-router-dom'
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import Book from './components/book/BookPage';


const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/books" element={<Book/>}></Route> 
      </Routes>
    </div>
  );
};

export default App