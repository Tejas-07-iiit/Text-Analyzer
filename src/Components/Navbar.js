import React from 'react'
import { useState } from 'react';


function Navbar() {
    
    const changetoupper = ()=> {
        let newtext = text.toUpperCase();   
        setText(newtext)
    }
    
    const textareachange = (event) => {
        setText(event.target.value)
    }

    const changetolower = ()=> {
        let newtext1 = text.toLowerCase();
        setText(newtext1)
    }
    
    const [text , setText] = useState(" ");
    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="./">Text Analyzer</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="./navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="./">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="./">Link</a>
                </li>
                <li className="nav-item dropdown"/>
            </ul>
            </div>
        </div>
    </nav>

    <div className='container'>
        <h2 className='mt-3'>Welcome to Text Analyzer</h2>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label" />
        <textarea className="form-control" value={text} onChange={textareachange} id="exampleFormControlTextarea1" rows="9"></textarea>
        <button type="button" onClick={changetoupper} className="btn bg-dark text-light mt-3 mx-5">Upper case</button>
        <button type="button" onClick={changetolower} className="btn bg-dark text-light mt-3">Upper case</button>

        
    </div>
    </div>
        </>
  )
}

export default Navbar;