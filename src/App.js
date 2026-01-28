import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar0';
import Analyzer from './Components/Analyzer';
import Alert from './Components/Alert';
import About from './Components/About';
import {Route , Routes} from "react-router-dom";
import Contact from './Components/Contact';
import { HashRouter } from "react-router-dom";
import Gemini from './Components/Summarize';

function App() {

  const [mode , changeMode] = useState("light")
  const [alert , setalert] = useState(null)

  const showalert = (message) => {
      setalert(message)
      setTimeout(() => {
        setalert(null)
      }, 1800);
  } 

  const modechange = () => {
    if(mode === 'light') {
      changeMode('dark')
      document.body.style.backgroundColor = 'rgba(33, 37, 41, 0.92)';
    }
    else {
      changeMode('light')
      document.body.style.backgroundColor = 'white';
    }
  }
  
  return (
    <>
    <HashRouter>
      <Navbar modechange={modechange} mode = {mode}/>
      <Alert alert = {alert}/>
     
      <Routes>
          <Route exact path="/textspark" element={<Gemini mode = {mode} />}/>
          <Route exact path="/about" element={<About mode = {mode} />}/>
          <Route exact path="/contact" element={<Contact mode = {mode}/>}/>
          <Route exact path="/" element ={<Analyzer mode = {mode} showalert = {showalert}/>}/>
      </Routes>
      
    </HashRouter>
   </>
  );
}

export default App;
  