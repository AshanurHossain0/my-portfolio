import React from 'react'
import { Route,BrowserRouter,Routes } from "react-router-dom";

//Components
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';
import Resume from './Components/Resume';



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes>
      </div>     
    </BrowserRouter>
  );
}

export default App
