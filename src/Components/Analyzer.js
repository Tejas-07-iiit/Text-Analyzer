import { useState } from "react"
import {jsPDF} from "jspdf"


function Analyzer(props) {
    
    const [Mail , setMail] = useState("");
    
    const [text , setText] = useState(" ");
    let mail_array= text.match(/[a-zA-Z0-9]+\w+@[a-zA-Z0-9]+\.+[a-zA-Z0-9]+/g);
    var i = 0;

    const removeWhitespace = () => { 
        let text2 = text.split(/\s+/)
        text2=text2.join(' ')
        setText(text2)
    }
    const Pdf_text = () => {

        let newPdf = new jsPDF()
        
        newPdf.setFont("helvetica", "bold");
        newPdf.text("Main Text",90,10)
        newPdf.setLineWidth(0.7); 
        newPdf.line(10, 15, 200, 15);
        newPdf.setFont("helvetica", "normal");
        let line = newPdf.splitTextToSize(text,190)
        let y = 30
        let pageheight = newPdf.internal.pageSize.getHeight()
        let j = 0
        while (j<line.length) {
            newPdf.text(line[j],10,y)
            y += 7;
            if (y+7>pageheight) {
                newPdf.addPage()
                y = 10
            }
            j += 1
        }

        newPdf.save(`pdf${i}.pdf`)
        i += 1
        const pdf_link = document.createElement('a')
        pdf_link.href = `./pdf${i}.pdf`
        pdf_link.download = `./pdf${i}.pdf` 
        
    }

    const convertToCamel = () => {
        console.log(text)
        let t1 = text.split(' ')
        for (let i = 0; i < t1.length; i++) {
            if(t1[i] !== '/[0-9]/' && t1[i] !== ''){
                t1[i] = t1[i].at(0).toUpperCase() + t1[i].slice(1).toLowerCase()
            }
        }
        setText(t1.join(" "))
        console.log(text)
    }   

    const Pdf_mail = () => {

        let newPdf = new jsPDF()
        
        newPdf.setFont("helvetica", "bold");
        newPdf.text("Mail",90,10)
        newPdf.setLineWidth(0.7); 
        newPdf.line(10, 15, 200, 15);
        newPdf.setFont("helvetica", "normal");
        let mail_array= text.match(/[a-zA-Z0-9]+\w+@[a-zA-Z0-9]+\.+[a-zA-Z0-9]+/g );
        
        let main_mail_do = mail_array.join('\n')
        
        let line = newPdf.splitTextToSize(main_mail_do,100)
        let y = 30
        let pageheight = newPdf.internal.pageSize.getHeight()
        let j = 0
        while (j<line.length) {
            newPdf.text(line[j],10,y)
            y += 7;
            if (y+7>pageheight) {
                newPdf.addPage()
                y = 10
            }
            j += 1
        }

        newPdf.save(`pdf${i}.pdf`)
        i += 1
        const pdf_link = document.createElement('a')
        pdf_link.href = `./pdf${i}.pdf`
        pdf_link.download = `./pdf${i}.pdf` 
        
    }

    const mailDetector = () => {
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
        let text1 = text.split(/\s+/) ;
        text1 = text1.join("")
        for (let i = 0; i < text1.length; i++) {
            if (text[i] !== " " && text[i] !== '') {
                num_ch += 1
            } 
        }
        return num_ch 
    }
    
    const numberofWords = () => {
        let num_words = 0 ;
        let text1 = text.split(/\s+/) ;
        for (let i = 0; i < text1.length; i++) {
            if (text1[i] !== " " && text1[i] !== "") {
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
    
    const Clipboardcopy_text = () => {
        if(navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text)
            props.showalert("Text Copied To clipboard")
        }
    }

    const Clipboardcopy_mail = () => {
        navigator.clipboard.writeText(mail_array)
        if(mail_array) {
            props.showalert("Mail Copied To clipboard")
        }
    }

    const nu_mails =()=> {
        if(mail_array) {
            return mail_array.length
        }
        else {
            return 0
        }
    }
    return (
        <>
    <div>
            
    <div className='container'>
        <h2 className={`mt-3 text-${props.mode==="light"?"dark":"light"}`}>Enter Your Text Here..</h2>
        <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label" />
        <textarea className={`form-control bg-${props.mode} text-${props.mode==="light"?"dark":"light"} custom-text`} value={text} onChange={textareachange} id="exampleFormControlTextarea1" rows="9"></textarea>
        <div className="center">
            <button type="button" onClick={changetoupper} className={`btn bg-${props.mode==="light"?"dark":"light"} text-${props.mode} mt-3 mx-3 text`}>Upper case</button>
            <button type="button" onClick={changetolower} className={`btn bg-${props.mode==="light"?"dark":"light"} text-${props.mode} mt-3 mx-3 text`}>Lower case</button>
            <button type="button" onClick={convertToCamel} className={`btn bg-${props.mode==="light"?"dark":"light"} text-${props.mode} mt-3 mx-3 text`}>Camel case</button>
            <button type="button" onClick={Clipboardcopy_text} className={`btn bg-${props.mode==="light"?"dark":"light"} text-${props.mode} mt-3 mx-3 text`}>Copy</button>
            <button type="button" onClick={removeWhitespace} className={`btn bg-${props.mode==="light"?"dark":"light"} text-${props.mode} mt-3 mx-3 text`}>White Space</button>
            <button type="button" onClick={cleartext} className={`btn bg-${props.mode==="light"?"dark":"light"} text-${props.mode} mt-3 mx-3 text`}>Clear text</button>
        </div>
        <hr className="light"></hr>
        <div className="download">
            <button type="button" onClick={Pdf_text} className={`btn bg-${props.mode==="light"?"dark":"light"} text-${props.mode} mt-3 mx-3 text`}>Download Main Text</button>
            <button type="button" onClick={Pdf_mail} className={`btn bg-${props.mode==="light"?"dark":"light"} text-${props.mode} mt-3 mx-3 text`}>Download Mail</button>
        </div>

        <hr></hr>
        <div className="mail">
        <div className="copy_detect">
            <button type="button" onClick={mailDetector} className={`btn bg-${props.mode==="light"?"dark":"light"} text-${props.mode} mt-3 mx-3 text`}>Detect Mail</button>
            <button type="button" onClick={Clipboardcopy_mail} className={`btn bg-${props.mode==="light"?"dark":"light"} text-${props.mode} mt-3 mx-3 text`}>Copy Mail</button>
        </div>
            <textarea value={Mail} readOnly onChange={setmail_1} rows="7" className= {`bg-${props.mode} text-${props.mode==="light"?"dark":"light"} text_mail`}></textarea>
        </div>
    </div>

    <hr></hr>                  

    <h2 className={`summary text-${props.mode==="light"?"dark":"light"} text`}> Text summary </h2>
   <table className={`table custom-table border-${props.mode === "light" ? "dark" : "light"} `}>
        <thead>
            <tr>
            <th scope="col">Title</th>
            <th scope="col">Count</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th className={`bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} scope="row">Number of Character In given Text (Without space)</th>
            <td className={`bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}>{numberofCharacter()}</td>
            </tr>
            <tr>
            <th className={`bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} scope="row">Number of Words In given Text</th>
            <td className={`bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}>{numberofWords()}</td>
            </tr>
            <tr>
            <th className={`bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`} scope="row">Number of Mails</th>
            <td className={`bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}>{nu_mails()}</td>
            </tr>
        </tbody>
    </table>
    
    </div>
    </div>
    </>
  );
    
}

export default Analyzer;
