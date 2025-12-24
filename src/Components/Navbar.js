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

    const numberofCharacter = () => {
        let num_ch = 0
        for (let i = 0; i < text.length; i++) {
            if (text[i] != " ") {
                num_ch += 1
            } 
        }
        return num_ch 
    }

    const numberofWords = () => {
        let num_words = 0 ;
        let text1 = text.split(" ") ;
        for (let i = 0; i < text1.length; i++) {
            if (text1[i] != " " & text1[i] != "") {
                num_words += 1
            } 
        }
        return num_words
    }
    
    const [text , setText] = useState(" ");
    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand custom_nav" href="./">Text Analyzer</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="./navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>

    <div className='container'>
        <h2 className='mt-3'>Welcome to Text Analyzer</h2>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label" />
        <textarea className="form-control custom-text" value={text} onChange={textareachange} id="exampleFormControlTextarea1" rows="9"></textarea>
        <button type="button" onClick={changetoupper} className="btn bg-dark text-light mt-3 mx-5">Upper case</button>
        <button type="button" onClick={changetolower} className="btn bg-dark text-light mt-3">Lower case</button>
    </div>

    <div className="alltable">
        <h2 className='mx-1 mt-1'> Text summary </h2>
        <table className="custom-table">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Count</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">Number of Character In given Text (Without space)</th>
                <td>{numberofCharacter()}</td>
                </tr>

                <tr>
                <th scope="row">Number of Words In given Text</th>
                <td>{numberofWords()}</td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
    </>
  )
}

export default Navbar;