import React from 'react'
import { Route,BrowserRouter,Routes } from "react-router-dom";

//Components
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Navbar from './Components/Navbar';



const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/experience' component={Experience}/>
          <Route path='/contact' component={Contact}/>
        </Routes>
      </div>     
    </BrowserRouter>
  );
}

export default App
