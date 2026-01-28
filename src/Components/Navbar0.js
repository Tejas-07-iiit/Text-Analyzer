import { Link ,useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useState } from "react";
function Navbar0(props) {

    let location = useLocation()
    // console.log(location)
    const [size,setsize] = useState(false)

    const size1 = () => {
        const width = window.innerWidth
        if(width < 516){
            setsize(true)
        }
        else{
            setsize(false)
        }
    }

    window.addEventListener('resize',size1)

    return (
    <>
        <nav className='bg-dark custom-nav'>
            <div className="my-2 text textanalyzer">
                    <Link className={`navbar-brand ${location.pathname==="/"? "active1": "nonactive"}`} style={{color:"white"}} to="/">Text-Analyzer</Link>
            </div>
                {!size && <div style={{marginTop:"10px"}}>
                    <ul className="navbar-nav text-wrap">
                        <li className="nav-item">
                            <Link className={`link-nav ${location.pathname==="/"? "active1": "nonactive"}`} to="/">Home</Link>
                         </li>
                        <li className="nav-item">
                            <Link className={`link-nav ${location.pathname==="/about"? "active1": "nonactive"}`} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`link-nav ${location.pathname==="/contact"? "active1": "nonactive" }`}  to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`link-nav ${location.pathname==="/textspark"? 'active1': "nonactive" }`} style={{marginTop:'3px'}} to="/textspark">TextSpark</Link>
                        </li>
                        
                    </ul>
                </div>}

                
                <div className="form-check form-switch custom-switch my-2">
                    {size && <div style={{alignItems:"center"}}>
                        <Dropdown/>
                    </div>}
                    <div style={{alignItems:"center"}}>
                    <input className="form-check-input switch" style={{marginTop:"6px"}} onClick={props.modechange} type="checkbox" role="switch" id="switchCheckDefault"/>
                    <label className= 'text-light form-check-label text text-nowrap'>{props.mode} mode</label>
                    </div>
                </div>
        
                
        </nav>  
    </>
  )
}

export default Navbar0;