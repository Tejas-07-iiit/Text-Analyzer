import { Link ,useLocation } from "react-router-dom";

function Navbar0(props) {

    let location = useLocation()
    return (
    <>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark custom_nav'>
            <div className="container-fluid">
                    <Link className={`navbar-brand ${location.pathname==="/"? "active": ""}`} to="/">Text-Analyzer</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/"? "active": ""}`} aria-current="page" style={{marginTop:'3px'}} to="/">Home</Link>
                         </li>
                        {/* <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/textspark"? 'active': "" }`} style={{marginTop:'3px'}} to="/textspark">TextSpark</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/about"? 'active': "" }`} style={{marginTop:'3px'}} to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname==="/contact"? 'active': "" }`} style={{marginTop:'3px'}} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="form-check form-switch custom-switch">
                    <input className="form-check-input switch" onClick={props.modechange} type="checkbox" role="switch" id="switchCheckDefault"/>
                    <label className= 'text-light form-check-label my-1 my-1 py-5 mx-1  text text-nowrap'>{props.mode} mode</label>
                </div>
                
            </div>
        </nav>  
    </>
  )
}

export default Navbar0;