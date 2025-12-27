import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar0';
import Analyzer from './Components/Analyzer';
import Alert from './Components/Alert';


function App() {

  const [mode , changeMode] = useState("light")
  const [alert , setalert] = useState(null)

  const showalert = (message) => {
      setalert(message)
      setInterval(() => {
        setalert(null)
      }, 1300);
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
    <Navbar modechange={modechange} mode = {mode}/>
    <Alert alert = {alert}/>
    <Analyzer mode = {mode} showalert = {showalert}/>
   </>
  );
}

export default App;
  