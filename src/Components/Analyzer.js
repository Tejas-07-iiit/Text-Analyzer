import { useState } from "react"

function Analyzer(props) {
    
    const [Mail , setMail] = useState("");
    
    const [text , setText] = useState(" ");
    
    
    const convertToCamel = () => {
        let t1 = text.split(' ')
        for (let i = 0; i < t1.length; i++) {
            if(t1[i] !== '/[0-9]/' && t1[i] !== '' && t1[i] !== ' '){
                t1[i] = t1[i].at(0).toUpperCase() + t1[i].slice(1).toLowerCase()
            }
        }
        setText(t1.join(" "))
    }   

    const mailDetector = () => {
        let mail_array= text.match(/[a-zA-Z0-9]+\w+@[a-zA-Z0-9]+\.+[a-zA-Z0-9]+/g );
        if(mail_array) {
            let main_mail = mail_array.join('\n')
            setMail(main_mail)
        }
    }

    const setmail_1 = (event) => {
        setMail(event.target.value + '\n')
    }
    
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
            if (text[i] !== " ") {
                num_ch += 1
            } 
        }
        return num_ch 
    }
    
    const numberofWords = () => {
        let num_words = 0 ;
        let text1 = text.split(" ") ;
        for (let i = 0; i < text1.length; i++) {
            if (text1[i] !== " " & text1[i] !== "") {
                num_words += 1
            } 
        }
        return num_words
    }
    
    
    const cleartext = () => {
        let text1 = " "
        setMail(" ")
        setText(text1)
    }
    
    const Clipboardcopy = () => {
        navigator.clipboard.writeText(text)
        props.showalert("Copied To clipboard")
    }
    
    return (
        <>
    <div>
            
    <div className='container'>
        <h2 className='mt-3 text'>Enter Your Text Here..</h2>
        {/* <h4 className="text"></h4> */}
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label" />
        <textarea className="form-control custom-text" value={text} onChange={textareachange} id="exampleFormControlTextarea1" rows="9"></textarea>
        <div className="center">
            <button type="button" onClick={changetoupper} className="btn bg-dark text-light mt-3 mx-3 text">Upper case</button>
            <button type="button" onClick={changetolower} className="btn bg-dark text-light mt-3 mx-3 text">Lower case</button>
            <button type="button" onClick={convertToCamel} className="btn bg-dark text-light mt-3 mx-3 text">Camel case</button>
            <button type="button" onClick={Clipboardcopy} className="btn bg-dark text-light mt-3 mx-3 text">Copy</button>
            <button type="button" onClick={cleartext} className="btn bg-dark text-light mt-3 mx-3 text">Clear text</button>
        </div>

        <hr></hr>

        <div className="mail">
            <button type="button" onClick={mailDetector} className="btn bg-dark text-light mt-3 mx-3 text">Detect Mail</button>
            <textarea value={Mail} readOnly onChange={setmail_1} rows="7" className="text_mail"></textarea>
        </div>

    </div>

    <hr></hr>

    <h2 className='summary text'> Text summary </h2>
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

export default Analyzer;
