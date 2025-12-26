import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar0';
import Analyzer from './Components/Analyzer';
import Alert from './Components/Alert';


function App() {


  const [alert , setalert] = useState(null)

  const showalert = (message) => {
      setalert(message)
      setInterval(() => {
        setalert(null)
      }, 1300);
  }
  
  return (  
    <>
    <Navbar/>
    <Alert alert = {alert}/>
    <Analyzer showalert = {showalert}/>
   </>
  );
}

export default App;
  