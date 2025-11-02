import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home'

import Post from './Post';
import ButtonNavigation from './ButtonNavigation';
import About from './MyAbout';

function App(){
  return(
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />  
        <Route path="/posts/:id" element={<Post/>}/>
        <Route path="/navigation" element={<ButtonNavigation />} />
      </Routes>
      <ButtonNavigation/>
    </Router>
  );
}
export default App;