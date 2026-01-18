import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = (props) => {

    const contact = `Hi, I'm tejas Ambaliya , 
The creator of Text Analyzer. 
I created this tool to help you edit and analyze text quickly and easily. 
my goal is to make text processing simple for everyone.`
  return (
    <>
      <div className={`contact bg-${props.mode}`}>
        <h4 className={`text-${props.mode==='light'?'dark':'light'}`} style={{color:"rgba(5, 5, 5, 1)" , textAlign:"center" , fontFamily:"ui-sans-serif"}}>You are welcome to submit your review, suggest improvements to this site, or ask any questions.</h4>
                <hr/>
                <form action={"https://formspree.io/f/xnjnowob"} method="POST">
                    <div className="mb-1">
                        <label className={`form-label text-${props.mode==='light'?'dark':'light'} text`}>Name</label>
                        <input className="form-control" name="Name"/>
                    </div>

                    <div className="mb-1"> 
                        <label htmlFor="exampleInputEmail1"  className={`form-label text-${props.mode==='light'?'dark':'light'} text`}>Email Address</label>
                        <input type="email" className="form-control" name="Email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <pre id="emailHelp" className={`form-text text`}>We'll never share your email with anyone else.</pre>
                    </div>

                    <div className="mb-1">
                        <label htmlFor="exampleInputPassword1" name="Description" className={`form-label text-${props.mode==='light'?'dark':'light'}  text`}>Query or Review</label>
                        <textarea className={`form-control text-${props.mode!=="light"?"dark":"light"} custom-text`} id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div>

                    <button type="submit" name="Button" className={`btn btn-${props.mode==='light'?'dark':'light'} text`}>Submit</button>
                </form>
            </div>

            

            <div className={`info border border-${props.mode === "light" ? "dark" : "secondary"} `}>
                <div className={`text-${props.mode==="light"?"dark":"light"} text about_owner `} style={{ whiteSpace: "pre-line" }}>
                    <h3>About The Owner</h3>
                    <h5>{contact}</h5>
                </div>  
                <div className="line"></div>
                <div className="connected">
                    <h3 className={`text-${props.mode === "light"?"dark":"light"} text`}>Stay Connected</h3>
                    <div className="myinfo">
                        <div className="email d-flex">
                            <FontAwesomeIcon className={`${props.mode === "light" ? "icon-dark" : "icon-light"} icon`} icon={faEnvelope} size="2x" />
                            <h6 className={`text-${props.mode==='dark'?'light':'dark'}`}>Email :</h6>
                            <a className='info-link' href='https://mail.google.com/mail/u/0/#inbox?compose=jrjtXFBkDZlLVPnHFRDDcDPNHrgxQcMXTpLmRFpKSBBWBkkCqTwsfKHnsqmBTptTPSsprCZB'>tejas23106@gmail.com</a>
                        </div>

                        <div className="Github d-flex">
                            <FontAwesomeIcon className={` ${props.mode === "light" ? "icon-dark" : "icon-light"} icon`} icon={faGithub} size="2x" />
                            <h6 className={`text-${props.mode==='dark'?'light':'dark'}`}>Github :</h6>
                            <a className="info-link" href="https://github.com/Tejas-07-iiit">https://github.com/Tejas-07-iiit</a>
                        </div>

                        <div className="linkedin d-flex">
                            <FontAwesomeIcon className={`${props.mode === "light" ? "icon-dark" : "icon-light"} icon`} icon={faLinkedin} size="2x" />
                            <h6 className={`text-${props.mode==='dark'?'light':'dark'}`}>Linkedin :</h6>
                            <a className='info-link' href='https://www.linkedin.com/in/tejas-ambaliya-72a807324/'>https://www.linkedin.com</a>
                        </div>
                    </div>
                </div>
            </div>
    </> 
  )
}

export default Contact