import React from 'react'
import { Route,BrowserRouter,Routes } from "react-router-dom";

//Components
import Home from './Components/Home';
import About from './Components/About';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/experience' element={<Experience/>}/>
        </Routes>
      </div>     
    </BrowserRouter>
  );
}

export default App
